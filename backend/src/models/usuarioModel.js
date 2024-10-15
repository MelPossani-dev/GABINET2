const db = require('../config/database');
const bcrypt = require('bcryptjs');

class UsuarioModel {
  static async create(usuario) {
    const hashedSenha = await bcrypt.hash(usuario.senha, 10);
    const [result] = await db.execute(
      'INSERT INTO usuario (nome, email, senha, nivel_acesso) VALUES (?, ?, ?, ?)',
      [usuario.nome, usuario.email, hashedSenha, usuario.nivel_acesso]
    );
    return result.insertId;
  }

  static async findAll() {
    const [rows] = await db.query('SELECT id, nome, email, nivel_acesso FROM usuario');
    return rows;
  }

  static async findById(id) {
    const [rows] = await db.query('SELECT id, nome, email, nivel_acesso FROM usuario WHERE id = ?', [id]);
    return rows[0];
  }

  static async findByEmail(email) {
    const [rows] = await db.query('SELECT * FROM usuario WHERE email = ?', [email]);
    return rows[0];
  }

  static async update(id, usuario) {
    let query = 'UPDATE usuario SET nome = ?, email = ?, nivel_acesso = ?';
    let params = [usuario.nome, usuario.email, usuario.nivel_acesso];

    if (usuario.senha) {
      const hashedSenha = await bcrypt.hash(usuario.senha, 10);
      query += ', senha = ?';
      params.push(hashedSenha);
    }

    query += ' WHERE id = ?';
    params.push(id);

    const [result] = await db.execute(query, params);
    return result.affectedRows;
  }

  static async delete(id) {
    const [result] = await db.execute('DELETE FROM usuario WHERE id = ?', [id]);
    return result.affectedRows;
  }
}

module.exports = UsuarioModel;