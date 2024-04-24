import RabbitMQ from "./amqp/rabbitmq.js";
import app from "./app.js";

const serverInit = async () => {
  app.listen(process.env.PORT, () => {
    console.log(`Servidor rodando na porta ${process.env.PORT}.`);
  })

  const rabbitmq = await RabbitMQ.init();
  const channel = await rabbitmq.create_channel(process.env.QUEUE_CANDLES);

}

serverInit();
