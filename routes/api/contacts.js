const express = require("express");

const { restart } = require("nodemon");

const router = express.Router();

const ctrl = require("../../controllers/contacts");

const { ctrlWrapper } = require("../../routes/api/helpers");

const { validateBody, validateContactId } = require("../../middlewares");

const schemas = require("../../schemas/contacts");

router.get("/", ctrlWrapper(ctrl.listContacts));

router.get(
  "/:contactId",
  validateContactId(schemas.contactSchema),
  ctrlWrapper(ctrl.getContactById)
);

router.post(
  "/",
  validateBody(schemas.contactSchema),
  ctrlWrapper(ctrl.addContact)
);

router.delete(
  "/:contactId",
  validateContactId(schemas.contactSchema),
  ctrlWrapper(ctrl.removeContact)
);

router.put(
  "/:contactId",
  validateContactId(schemas.contactSchema),
  validateBody(schemas.contactSchema),
  ctrlWrapper(ctrl.updateContact)
);

module.exports = router;
