import { data } from "../data/data";

export class CurrencyConverter {
  async converte(req, res) {
    try {
      let curr1 = [];
      let curr2 = [];
      let response;
      const { value, from, to } = req.body;
      if (to === "USD") {
        curr1 = data.filter((e) => {
          return e.currency === from;
        });
        response = value / curr1[0].value;
      } else if (from === "USD") {
        curr1 = data.filter((e) => {
          return e.currency === to;
        });
        response = value * curr1[0].value;
      } else {
        curr1 = data.filter((e) => {
          return e.currency === from;
        });
        curr2 = data.filter((e) => {
          return e.currency === to;
        });
        const fromtoUsd = value / curr1[0].value;
        response = fromtoUsd * curr2[0].value;
      }
      return res.status(201).json({
        response,
      });
    } catch (err) {
      return res.status(500).json({
        message: "Error while converting,try again",
        error: err.message,
      });
    }
  }

  async getAllCurrencies(req, res) {
    try {
      const currencies = data;
      return res.status(200).json({
        currencies
      });
    } catch (err) {
      return res.status(500).json({
        message: "Error while getting currencies,try again",
        error: err.message,
      });
    }
  }
}

const moneyConverter = new CurrencyConverter();
export default moneyConverter;
