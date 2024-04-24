import { connect } from "amqplib"


/**
 * @typedef {Object} RabbitMQChannel
 * @property {Function} assertQueue - Declara uma fila no RabbitMQ.
 * @property {Function} consume - Consome mensagens de uma fila no RabbitMQ.
 * @property {Function} publish - Publica uma mensagem em um exchange no RabbitMQ.
 * @property {Function} ack - Confirma o recebimento de uma mensagem no RabbitMQ.
 * @property {Function} nack - Rejeita uma mensagem no RabbitMQ.
 */

class RabbitMQ {
  constructor(connection) {
    this.connection = connection;
    this.channel = null;
  }

  /**
   * @returns {Promise<RabbitMQ>}
   **/
  static async init() {
    try {
      const connection = await connect(process.env.AMQP_SERVER);
      console.log("Conexão com o RabbitMQ estabelecida.");
      return new RabbitMQ(connection)
    } catch (e) {
      console.log(e);
      throw new Error("Erro ao tentar se conectar com o RabbitMQ.")
    }
  }

  /**
   * @returns {Promise<RabbitMQChannel>}
   **/
  async create_channel(queue) {
    this.channel = await this.connection.createChannel();
    await this.channel.assertQueue(queue);
    console.log(`Canal criado para o canal ${queue}.`)
    return this.channel;
  }

  /**
   * @return {void}
   **/
  async close_connection() {
    await this.channel.close();
    await this.connection.close();
  }
}

export default RabbitMQ;
