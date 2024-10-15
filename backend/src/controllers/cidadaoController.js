const CidadaoModel = require('../models/cidadaoModel');
const { validateCidadao } = require('../utils/cidadaoValidator');

class CidadaoController {
  async create(req, res) {
    try {
      const validationErrors = validateCidadao(req.body);
      if (validationErrors.length > 0) {
        return res.status(400).json({ errors: validationErrors });
      }

      const id = await CidadaoModel.create(req.body);
      res.status(201).json({ id, message: 'Cidadão criado com sucesso' });
    } catch (error) {
      res.status(500).json({ message: 'Erro ao criar cidadão', error: error.message });
    }
  }

  async getAll(req, res) {
    try {
      const cidadaos = await CidadaoModel.findAll();
      res.json(cidadaos);
    } catch (error) {
      res.status(500).json({ message: 'Erro ao buscar cidadãos', error: error.message });
    }
  }

  async getById(req, res) {
    try {
      const cidadao = await CidadaoModel.findById(req.params.id);
      if (cidadao) {
        res.json(cidadao);
      } else {
        res.status(404).json({ message: 'Cidadão não encontrado' });
      }
    } catch (error) {
      res.status(500).json({ message: 'Erro ao buscar cidadão', error: error.message });
    }
  }

  async update(req, res) {
    try {
      const validationErrors = validateCidadao(req.body);
      if (validationErrors.length > 0) {
        return res.status(400).json({ errors: validationErrors });
      }

      const affectedRows = await CidadaoModel.update(req.params.id, req.body);
      if (affectedRows > 0) {
        res.json({ message: 'Cidadão atualizado com sucesso' });
      } else {
        res.status(404).json({ message: 'Cidadão não encontrado' });
      }
    } catch (error) {
      res.status(500).json({ message: 'Erro ao atualizar cidadão', error: error.message });
    }
  }

  async delete(req, res) {
    try {
      const affectedRows = await CidadaoModel.delete(req.params.id);
      if (affectedRows > 0) {
        res.json({ message: 'Cidadão excluído com sucesso' });
      } else {
        res.status(404).json({ message: 'Cidadão não encontrado' });
      }
    } catch (error) {
      res.status(500).json({ message: 'Erro ao excluir cidadão', error: error.message });
    }
  }
}

module.exports = CidadaoController;