
import CandlesRepository from "../repository/candles-repository.js"

/**
 * @description Consome a mensagem e armazena na tabela candles.
 * @param {import("./rabbitmq").RabbitMQChannel} channel
 **/
export const consumer_candle = async (channel) => {
  channel.consume(process.env.QUEUE_CANDLES, async (msg) => {
    const candle = JSON.parse(msg.content.toString())
    console.log("Message received.")
    channel.ack(msg)
    const repository = new CandlesRepository();
    repository.insert_candle(candle);
  })
}
