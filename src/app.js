import e from "express";
import cors from "cors"
import routes from "./routes/index.js";

const app = e();
app.use(cors());

app.use(routes.basic)
app.use("/candles", routes.candles)

// app.listen(process.env.PORT, () => {
//   console.log(`Servidor rodando na porta ${process.env.PORT}.`);
// })

export default app;
