import express from "express";
import moneyConverter from "../controllers/currency.controller";
import { currencyValidation } from "../validations/currency.validation";

const routes = express();

routes
  .route("/")
  .post(currencyValidation, moneyConverter.converte)
  .get(moneyConverter.getAllCurrencies);

export default routes;
