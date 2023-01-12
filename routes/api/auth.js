const express = require("express");

const { ctrlWrapper } = require("../../routes/api/helpers");

const { validateBody, auth, upload } = require("../../middlewares");
const { auth: ctrl } = require("../../controllers");
const { joiSignupSchema, joiLoginSchema } = require("../../models/user");
const router = express.Router();

router.post("/signup", validateBody(joiSignupSchema), ctrlWrapper(ctrl.signup));

router.post("/login", validateBody(joiLoginSchema), ctrlWrapper(ctrl.login));

router.get("/current", auth, ctrlWrapper(ctrl.getCurrent));

router.get("/logout", auth, ctrlWrapper(ctrl.logout));

router.patch("/", auth, ctrlWrapper(ctrl.updateSubscription));

router.patch(
  "/avatars",
  auth,
  upload.single("avatar"),
  ctrlWrapper(ctrl.updateAvatar)
);

module.exports = router;
