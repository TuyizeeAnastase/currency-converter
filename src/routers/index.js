import express from "express";
import converterRoutes from "./currency.route";

const routes = express();
routes.get("/", (req, res) => {
  return res.status(200).json({
    message: "This Cuurency v=converter app",
  });
});

routes.use("/api/v1/convert", converterRoutes);

routes.get("*", (req, res) => {
  res.status(404).json({
    message: "Page not found, try again",
  });
});

export default routes;
