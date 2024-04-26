import { Router } from "express";
import GetCandles from "../controllers/candles/get.js";

const route = Router();

route.get("/:currency/:quantity", async (req, res, next) => {
  return GetCandles.route(req, res, next);
})

export default route;
