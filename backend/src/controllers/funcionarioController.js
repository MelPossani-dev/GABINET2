const FuncionarioModel = require('../models/funcionarioModel');
const { validateFuncionario } = require('../utils/funcionarioValidator');

class FuncionarioController {
  async create(req, res) {
    try {
      const validationErrors = validateFuncionario(req.body);
      if (validationErrors.length > 0) {
        return res.status(400).json({ errors: validationErrors });
      }

      const id = await FuncionarioModel.create(req.body);
      res.status(201).json({ id, message: 'Funcionário criado com sucesso' });
    } catch (error) {
      res.status(500).json({ message: 'Erro ao criar funcionário', error: error.message });
    }
  }

  async getAll(req, res) {
    try {
      const funcionarios = await FuncionarioModel.findAll();
      res.json(funcionarios);
    } catch (error) {
      res.status(500).json({ message: 'Erro ao buscar funcionários', error: error.message });
    }
  }

  async getById(req, res) {
    try {
      const funcionario = await FuncionarioModel.findById(req.params.id);
      if (funcionario) {
        res.json(funcionario);
      } else {
        res.status(404).json({ message: 'Funcionário não encontrado' });
      }
    } catch (error) {
      res.status(500).json({ message: 'Erro ao buscar funcionário', error: error.message });
    }
  }

  async update(req, res) {
    try {
      const validationErrors = validateFuncionario(req.body);
      if (validationErrors.length > 0) {
        return res.status(400).json({ errors: validationErrors });
      }

      const affectedRows = await FuncionarioModel.update(req.params.id, req.body);
      if (affectedRows > 0) {
        res.json({ message: 'Funcionário atualizado com sucesso' });
      } else {
        res.status(404).json({ message: 'Funcionário não encontrado' });
      }
    } catch (error) {
      res.status(500).json({ message: 'Erro ao atualizar funcionário', error: error.message });
    }
  }

  async delete(req, res) {
    try {
      const affectedRows = await FuncionarioModel.delete(req.params.id);
      if (affectedRows > 0) {
        res.json({ message: 'Funcionário excluído com sucesso' });
      } else {
        res.status(404).json({ message: 'Funcionário não encontrado' });
      }
    } catch (error) {
      res.status(500).json({ message: 'Erro ao excluir funcionário', error: error.message });
    }
  }
}

module.exports = FuncionarioController;