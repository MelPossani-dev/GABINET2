const SolicitacaoModel = require('../models/solicitacaoModel');
const { validateSolicitacao } = require('../utils/solicitacaoValidator');

class SolicitacaoController {
  static async create(req, res) {
    try {
      const validationErrors = validateSolicitacao(req.body);
      if (validationErrors.length > 0) {
        return res.status(400).json({ errors: validationErrors });
      }

      const id = await SolicitacaoModel.create(req.body);
      res.status(201).json({ id, message: 'Solicitação criada com sucesso' });
    } catch (error) {
      res.status(500).json({ message: 'Erro ao criar solicitação', error: error.message });
    }
  }

  static async getAll(req, res) {
    try {
      const solicitacoes = await SolicitacaoModel.findAll();
      res.json(solicitacoes);
    } catch (error) {
      res.status(500).json({ message: 'Erro ao buscar solicitações', error: error.message });
    }
  }

  static async getById(req, res) {
    try {
      const solicitacao = await SolicitacaoModel.findById(req.params.id);
      if (solicitacao) {
        res.json(solicitacao);
      } else {
        res.status(404).json({ message: 'Solicitação não encontrada' });
      }
    } catch (error) {
      res.status(500).json({ message: 'Erro ao buscar solicitação', error: error.message });
    }
  }

  static async update(req, res) {
    try {
      const validationErrors = validateSolicitacao(req.body);
      if (validationErrors.length > 0) {
        return res.status(400).json({ errors: validationErrors });
      }

      const affectedRows = await SolicitacaoModel.update(req.params.id, req.body);
      if (affectedRows > 0) {
        res.json({ message: 'Solicitação atualizada com sucesso' });
      } else {
        res.status(404).json({ message: 'Solicitação não encontrada' });
      }
    } catch (error) {
      res.status(500).json({ message: 'Erro ao atualizar solicitação', error: error.message });
    }
  }

  static async delete(req, res) {
    try {
      const affectedRows = await SolicitacaoModel.delete(req.params.id);
      if (affectedRows > 0) {
        res.json({ message: 'Solicitação excluída com sucesso' });
      } else {
        res.status(404).json({ message: 'Solicitação não encontrada' });
      }
    } catch (error) {
      res.status(500).json({ message: 'Erro ao excluir solicitação', error: error.message });
    }
  }

  static async getByCidadao(req, res) {
    try {
      const solicitacoes = await SolicitacaoModel.findByCidadaoId(req.params.cidadaoId);
      res.json(solicitacoes);
    } catch (error) {
      res.status(500).json({ message: 'Erro ao buscar solicitações do cidadão', error: error.message });
    }
  }

  static async getBySecretaria(req, res) {
    try {
      const solicitacoes = await SolicitacaoModel.findBySecretariaId(req.params.secretariaId);
      res.json(solicitacoes);
    } catch (error) {
      res.status(500).json({ message: 'Erro ao buscar solicitações da secretaria', error: error.message });
    }
  }
}

module.exports = SolicitacaoController;