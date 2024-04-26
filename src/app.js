import e from "express";
import cors from "cors"
import routes from "./routes/index.js";

const app = e();
app.use(cors());

app.use(routes.basic)
app.use("/candles", routes.candles)

export default app;
