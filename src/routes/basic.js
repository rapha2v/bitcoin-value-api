import { Router } from "express";

const route = Router();

route.get("/", (req, res) => {
  return res.json({
    status: true,
    version: "1.0.0",
    name: "bitcoin-value-api"
  })
})

export default route;
