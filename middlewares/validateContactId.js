const { HttpError } = require("../routes/api/helpers");

const validateContactId = (schema) => {
  const func = (req, res, next) => {
    const { error } = schema.validate(req.params);
    if (error) {
      next(HttpError(400, "Invalid id format"));
    }
    next();
  };
  return func;
};

module.exports = validateContactId;
