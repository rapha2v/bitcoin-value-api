import RepositoryDefault from "./repository-default.js";

class CandlesRepository extends RepositoryDefault {
  constructor() {
    super("candles");
  }

  async insert_candle(data) {
    await this._insert_data(data);
  }

  async recent_candle_per_currency(currency, limit) {
    return this._recent_insert_data(
      { raw: "currency = ?", value: [currency] },
      limit
    );
  }

}

export default CandlesRepository;
