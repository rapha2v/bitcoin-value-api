import express from "express"
import CandlesRepository from "../../repository/candles-repository.js"

const { request, response, next } = express;

class GetCandles {

  /**
   * @param {request} req
   * @param {response} res
   * @param {next} next
   **/
  async route(req, res, next) {
    const currency = req.params.currency;
    const quantity = parseInt(req.params.quantity) || 5;
    const repositoryCandles = new CandlesRepository();
    const recentCandles = await repositoryCandles.recent_candle_per_currency(
      currency,
      quantity
    );
    return res.json({
      candles: recentCandles
    })
  }
}

export default new GetCandles();
