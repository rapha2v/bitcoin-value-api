import "dotenv/config.js"
import { consumer_candle } from "./amqp/consumer-candles.js";
import RabbitMQ from "./amqp/rabbitmq.js";
import app from "./app.js";

process.setMaxListeners(15);

const serverInit = async () => {
  const server = app.listen(process.env.PORT, () => {
    console.log(`Servidor rodando na porta ${process.env.PORT}.`);
  })

  const rabbitmq = await RabbitMQ.init();
  const channel = await rabbitmq.create_channel(process.env.QUEUE_CANDLES);
  await consumer_candle(channel)

  process.on('SIGINT', async () => {
    server.close();
  })
}

serverInit();
