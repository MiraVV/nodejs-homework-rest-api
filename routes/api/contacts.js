const express = require("express");

const { restart } = require("nodemon");

const router = express.Router();

const { contacts: ctrl } = require("../../controllers");

const { ctrlWrapper } = require("../../routes/api/helpers");

const { validateBody, validateParams, auth } = require("../../middlewares");

const { schemas } = require("../../models/contact");

router.get("/", auth, ctrlWrapper(ctrl.listContacts));

router.get(
  "/:contactId",
  validateParams(schemas.contactIdSchema),
  ctrlWrapper(ctrl.getContactById)
);

router.post(
  "/",
  auth,
  validateBody(schemas.addSchema),
  ctrlWrapper(ctrl.addContact)
);

router.delete(
  "/:contactId",
  validateParams(schemas.contactIdSchema),
  ctrlWrapper(ctrl.removeContact)
);

router.patch(
  "/:contactId/favorite",
  validateParams(schemas.contactIdSchema),
  validateBody(schemas.updateFavoritSchema),
  ctrlWrapper(ctrl.updateStatusContact)
);

router.put(
  "/:contactId",
  validateParams(schemas.contactIdSchema),
  validateBody(schemas.addSchema),
  ctrlWrapper(ctrl.updateContact)
);

module.exports = router;
