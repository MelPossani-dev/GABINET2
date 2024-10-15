const SecretariaModel = require('../models/secretariaModel');
const { validateSecretaria } = require('../utils/secretariaValidator');

class SecretariaController {
  static async create(req, res) {
    try {
      const validationErrors = validateSecretaria(req.body);
      if (validationErrors.length > 0) {
        return res.status(400).json({ errors: validationErrors });
      }

      const id = await SecretariaModel.create(req.body);
      res.status(201).json({ id, message: 'Secretaria criada com sucesso' });
    } catch (error) {
      res.status(500).json({ message: 'Erro ao criar secretaria', error: error.message });
    }
  }

  static async getAll(req, res) {
    try {
      const secretarias = await SecretariaModel.findAll();
      res.json(secretarias);
    } catch (error) {
      res.status(500).json({ message: 'Erro ao buscar secretarias', error: error.message });
    }
  }

  static async getById(req, res) {
    try {
      const secretaria = await SecretariaModel.findById(req.params.id);
      if (secretaria) {
        res.json(secretaria);
      } else {
        res.status(404).json({ message: 'Secretaria não encontrada' });
      }
    } catch (error) {
      res.status(500).json({ message: 'Erro ao buscar secretaria', error: error.message });
    }
  }

  static async update(req, res) {
    try {
      const validationErrors = validateSecretaria(req.body);
      if (validationErrors.length > 0) {
        return res.status(400).json({ errors: validationErrors });
      }

      const affectedRows = await SecretariaModel.update(req.params.id, req.body);
      if (affectedRows > 0) {
        res.json({ message: 'Secretaria atualizada com sucesso' });
      } else {
        res.status(404).json({ message: 'Secretaria não encontrada' });
      }
    } catch (error) {
      res.status(500).json({ message: 'Erro ao atualizar secretaria', error: error.message });
    }
  }

  static async delete(req, res) {
    try {
      const affectedRows = await SecretariaModel.delete(req.params.id);
      if (affectedRows > 0) {
        res.json({ message: 'Secretaria excluída com sucesso' });
      } else {
        res.status(404).json({ message: 'Secretaria não encontrada' });
      }
    } catch (error) {
      res.status(500).json({ message: 'Erro ao excluir secretaria', error: error.message });
    }
  }
}

module.exports = SecretariaController;