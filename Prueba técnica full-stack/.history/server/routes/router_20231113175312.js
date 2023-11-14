const { Router } = require("express");
const { getAllPrimas } = require("../controller/prima");

const router = Router();

router.get("/prima", getAllPrimas);

module.exports = {
  router,
};
