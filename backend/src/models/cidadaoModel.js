const db = require('../config/database');

class CidadaoModel {
  async create(cidadao) {
    const [result] = await db.execute(
      'INSERT INTO cidadao (nome, data_nasc, rg, cpf, cep, endereco, numero, bairro, cidade, estado, email, telefone) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
      [cidadao.nome, cidadao.data_nasc, cidadao.rg, cidadao.cpf, cidadao.cep, cidadao.endereco, cidadao.numero, cidadao.bairro, cidadao.cidade, cidadao.estado, cidadao.email, cidadao.telefone]
    );
    return result.insertId;
  }

  async findAll() {
    const [rows] = await db.query('SELECT * FROM cidadao');
    return rows;
  }

  async findById(id) {
    const [rows] = await db.query('SELECT * FROM cidadao WHERE id = ?', [id]);
    return rows[0];
  }

  async update(id, cidadao) {
    const [result] = await db.execute(
      'UPDATE cidadao SET nome = ?, data_nasc = ?, rg = ?, cpf = ?, cep = ?, endereco = ?, numero = ?, bairro = ?, cidade = ?, estado = ?, email = ?, telefone = ? WHERE id = ?',
      [cidadao.nome, cidadao.data_nasc, cidadao.rg, cidadao.cpf, cidadao.cep, cidadao.endereco, cidadao.numero, cidadao.bairro, cidadao.cidade, cidadao.estado, cidadao.email, cidadao.telefone, id]
    );
    return result.affectedRows;
  }

  async delete(id) {
    const [result] = await db.execute('DELETE FROM cidadao WHERE id = ?', [id]);
    return result.affectedRows;
  }
}

module.exports = CidadaoModel;