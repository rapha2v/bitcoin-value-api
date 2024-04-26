
import CandlesRepository from "../repository/candles-repository.js"

/**
 * @description Consome a mensagem e armazena na tabela candles.
 * @param {import("./rabbitmq").RabbitMQChannel} channel
 **/
export const consumer_candle = async (channel) => {
  channel.consume(process.env.QUEUE_CANDLES, async (msg) => {
    const candle = JSON.parse(msg.content.toString());
    console.log("Iniciando inserção da mensagem:");
    console.log(candle);
    const repository = new CandlesRepository();
    await repository.insert_candle(candle);
    console.log("Mensagem salva com sucesso.");
    channel.ack(msg);
    console.log("Mensagem recebida.");
  })
}
