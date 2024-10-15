const db = require('../config/database');

class SecretariaModel {
  static async create(secretaria) {
    const [result] = await db.execute(
      'INSERT INTO secretaria (nome_secretaria, secretario, cpf, cep, endereco, numero, bairro, cidade, estado, email, telefone) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
      [secretaria.nome_secretaria, secretaria.secretario, secretaria.cpf, secretaria.cep, secretaria.endereco, secretaria.numero, secretaria.bairro, secretaria.cidade, secretaria.estado, secretaria.email, secretaria.telefone]
    );
    return result.insertId;
  }

  static async findAll() {
    const [rows] = await db.query('SELECT * FROM secretaria');
    return rows;
  }

  static async findById(id) {
    const [rows] = await db.query('SELECT * FROM secretaria WHERE id = ?', [id]);
    return rows[0];
  }

  static async update(id, secretaria) {
    const [result] = await db.execute(
      'UPDATE secretaria SET nome_secretaria = ?, secretario = ?, cpf = ?, cep = ?, endereco = ?, numero = ?, bairro = ?, cidade = ?, estado = ?, email = ?, telefone = ? WHERE id = ?',
      [secretaria.nome_secretaria, secretaria.secretario, secretaria.cpf, secretaria.cep, secretaria.endereco, secretaria.numero, secretaria.bairro, secretaria.cidade, secretaria.estado, secretaria.email, secretaria.telefone, id]
    );
    return result.affectedRows;
  }

  static async delete(id) {
    const [result] = await db.execute('DELETE FROM secretaria WHERE id = ?', [id]);
    return result.affectedRows;
  }
}

module.exports = SecretariaModel;