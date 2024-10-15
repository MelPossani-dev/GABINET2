const db = require('../config/database');

class SolicitacaoModel {
  static async create(solicitacao) {
    const [result] = await db.execute(
      'INSERT INTO solicitacao (cidadao_id, usuario_id, assunto, solicitacao, secretaria_id, andamento) VALUES (?, ?, ?, ?, ?, ?)',
      [solicitacao.cidadao_id, solicitacao.usuario_id, solicitacao.assunto, solicitacao.solicitacao, solicitacao.secretaria_id, solicitacao.andamento || 'ABERTA']
    );
    return result.insertId;
  }

  static async findAll() {
    const [rows] = await db.query('SELECT * FROM solicitacao');
    return rows;
  }

  static async findById(id) {
    const [rows] = await db.query('SELECT * FROM solicitacao WHERE id = ?', [id]);
    return rows[0];
  }

  static async update(id, solicitacao) {
    const [result] = await db.execute(
      'UPDATE solicitacao SET cidadao_id = ?, usuario_id = ?, assunto = ?, solicitacao = ?, secretaria_id = ?, andamento = ? WHERE id = ?',
      [solicitacao.cidadao_id, solicitacao.usuario_id, solicitacao.assunto, solicitacao.solicitacao, solicitacao.secretaria_id, solicitacao.andamento, id]
    );
    return result.affectedRows;
  }

  static async delete(id) {
    const [result] = await db.execute('DELETE FROM solicitacao WHERE id = ?', [id]);
    return result.affectedRows;
  }

  static async findByCidadaoId(cidadaoId) {
    const [rows] = await db.query('SELECT * FROM solicitacao WHERE cidadao_id = ?', [cidadaoId]);
    return rows;
  }

  static async findBySecretariaId(secretariaId) {
    const [rows] = await db.query('SELECT * FROM solicitacao WHERE secretaria_id = ?', [secretariaId]);
    return rows;
  }
}

module.exports = SolicitacaoModel;