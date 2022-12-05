const { HttpError } = require("../routes/api/helpers");

const validateContactId = (schema) => {
  const func = (req, res, next) => {
    const { error } = schema.validate(req.contactId);
    if (error) {
      next(HttpError(400, error.message));
    }
    next();
  };
  return func;
};

module.exports = validateContactId;
