const { Contact } = require("../../models/contact");

const listContacts = async (req, res, next) => {
  const result = await Contact.find();
  // const result = await Contact.find({}, "-favorite"); укажет все поля, кроме favorite
  // const result = await Contact.find({}, "name phone"); укажет только поля name phone
  res.json({
    status: "success",
    code: 200,
    data: {
      result: result,
    },
  });
};

module.exports = listContacts;
