import db from "../entities/knex.js"

/**
 * @typedef {Object} where
 * @property {string} raw
 * @property {any[]} value
 **/

class RepositoryDefault {
  /**
   * @param {string} table
   **/
  constructor(table) {
    this.table = table
  }

  async _get_all_data() {
    try {
      const res = await db(this.table).select("*")
      return res;
    } catch (e) {
      console.log(e);
      throw new Error(`Error ao retornar todos os dados da tabela ${this.table}.`)
    }
  }

  async _insert_data(data) {
    try {
      await db(this.table).insert(data)
    } catch (e) {
      console.log(e);
      throw new Error(`Erro ao inserir dado na tabela ${this.table}.`)
    }
  }

  /**
   * @param {where} where
   * @param {number} limit
   **/
  async _recent_insert_data(where, limit) {
    try {
      const res = await db(this.table)
        .select("*")
        .whereRaw(where.raw, where.value)
        .orderBy("id", "desc")
        .limit(limit)
      return res;
    } catch (e) {
      console.log(e);
      throw new Error(`Erro ao pegar o(s) valor(es) recente(s) da tabela ${this.table}.`)
    }
  }

  async close_connection() {
    db.destroy();
  }
}

export default RepositoryDefault;
