import { request, response, next } from "express"
import CandlesRepository from "../../repository/candles-repository.js"

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
    const recentCandles = repositoryCandles.recent_insert_data(
      currency,
      quantity
    );
    return res.json({
      candles: recentCandles
    })
  }
}
