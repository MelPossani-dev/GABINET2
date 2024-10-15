const UsuarioModel = require('../models/usuarioModel');
const { validateUsuario } = require('../utils/usuarioValidator');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

class UsuarioController {
  static async create(req, res) {
    try {
      const validationErrors = validateUsuario(req.body);
      if (validationErrors.length > 0) {
        return res.status(400).json({ errors: validationErrors });
      }

      const id = await UsuarioModel.create(req.body);
      res.status(201).json({ id, message: 'Usuário criado com sucesso' });
    } catch (error) {
      res.status(500).json({ message: 'Erro ao criar usuário', error: error.message });
    }
  }

  static async getAll(req, res) {
    try {
      const usuarios = await UsuarioModel.findAll();
      res.json(usuarios);
    } catch (error) {
      res.status(500).json({ message: 'Erro ao buscar usuários', error: error.message });
    }
  }

  static async getById(req, res) {
    try {
      const usuario = await UsuarioModel.findById(req.params.id);
      if (usuario) {
        res.json(usuario);
      } else {
        res.status(404).json({ message: 'Usuário não encontrado' });
      }
    } catch (error) {
      res.status(500).json({ message: 'Erro ao buscar usuário', error: error.message });
    }
  }

  static async update(req, res) {
    try {
      const validationErrors = validateUsuario(req.body, true);
      if (validationErrors.length > 0) {
        return res.status(400).json({ errors: validationErrors });
      }

      const affectedRows = await UsuarioModel.update(req.params.id, req.body);
      if (affectedRows > 0) {
        res.json({ message: 'Usuário atualizado com sucesso' });
      } else {
        res.status(404).json({ message: 'Usuário não encontrado' });
      }
    } catch (error) {
      res.status(500).json({ message: 'Erro ao atualizar usuário', error: error.message });
    }
  }

  static async delete(req, res) {
    try {
      const affectedRows = await UsuarioModel.delete(req.params.id);
      if (affectedRows > 0) {
        res.json({ message: 'Usuário excluído com sucesso' });
      } else {
        res.status(404).json({ message: 'Usuário não encontrado' });
      }
    } catch (error) {
      res.status(500).json({ message: 'Erro ao excluir usuário', error: error.message });
    }
  }

  static async login(req, res) {
    try {
      const { email, senha } = req.body;
      const usuario = await UsuarioModel.findByEmail(email);

      if (!usuario || !(await bcrypt.compare(senha, usuario.senha))) {
        return res.status(401).json({ message: 'Credenciais inválidas' });
      }

      const token = jwt.sign(
        { id: usuario.id, nivel_acesso: usuario.nivel_acesso },
        process.env.JWT_SECRET,
        { expiresIn: '1h' }
      );

      res.json({ token, usuario: { id: usuario.id, nome: usuario.nome, email: usuario.email, nivel_acesso: usuario.nivel_acesso } });
    } catch (error) {
      res.status(500).json({ message: 'Erro ao fazer login', error: error.message });
    }
  }
}

module.exports = UsuarioController;