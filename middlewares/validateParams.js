const { isValidObjectId } = require("mongoose");

const { HttpError } = require("../routes/api/helpers");

const validateParams = (req, res, next) => {
  const { contactId } = req.params;
  const isCorrectId = isValidObjectId(contactId);
  if (!isCorrectId) {
    const error = HttpError(400, `id ${contactId} is not correct id format`);
    next(error);
  }
  next();
};

module.exports = validateParams;
