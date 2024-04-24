import { Router } from "express";

const route = Router();

route.get("/:quantity", (req, res) => {
  const quantity = parseInt(req.params.quantity);
  const candles = null;
  return res.json({
    status: true,
  })
})

export default route;
