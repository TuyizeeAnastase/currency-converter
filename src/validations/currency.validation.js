import joi from "joi";
export const currencyValidation = async (req, res, next) => {
  const currencySchema = joi.object({
    value: joi.number().required().messages({}),
    from: joi.string().required().messages({}),
    to: joi.string().required().messages({}),
  });
  const value = await currencySchema.validate(req.body);
  if (value.error) {
    res.status(400).json({
      message: value.error.details[0].message.replace(/["'`]+/g, ""),
    });
  } else {
    next();
  }
};
