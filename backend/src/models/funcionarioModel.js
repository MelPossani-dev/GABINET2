const db = require('../config/database');

class FuncionarioModel {
  async create(funcionario) {
    const [result] = await db.execute(
      'INSERT INTO funcionario (nome, data_nasc, cpf, cep, endereco, numero, bairro, cidade, estado, partido, cargo, email, telefone) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
      [funcionario.nome, funcionario.data_nasc, funcionario.cpf, funcionario.cep, funcionario.endereco, funcionario.numero, funcionario.bairro, funcionario.cidade, funcionario.estado, funcionario.partido, funcionario.cargo, funcionario.email, funcionario.telefone]
    );
    return result.insertId;
  }

  async findAll() {
    const [rows] = await db.query('SELECT * FROM funcionario');
    return rows;
  }

  async findById(id) {
    const [rows] = await db.query('SELECT * FROM funcionario WHERE id = ?', [id]);
    return rows[0];
  }

  async update(id, funcionario) {
    const [result] = await db.execute(
      'UPDATE funcionario SET nome = ?, data_nasc = ?, cpf = ?, cep = ?, endereco = ?, numero = ?, bairro = ?, cidade = ?, estado = ?, partido = ?, cargo = ?, email = ?, telefone = ? WHERE id = ?',
      [funcionario.nome, funcionario.data_nasc, funcionario.cpf, funcionario.cep, funcionario.endereco, funcionario.numero, funcionario.bairro, funcionario.cidade, funcionario.estado, funcionario.partido, funcionario.cargo, funcionario.email, funcionario.telefone, id]
    );
    return result.affectedRows;
  }

  async delete(id) {
    const [result] = await db.execute('DELETE FROM funcionario WHERE id = ?', [id]);
    return result.affectedRows;
  }
}

module.exports = FuncionarioModel;