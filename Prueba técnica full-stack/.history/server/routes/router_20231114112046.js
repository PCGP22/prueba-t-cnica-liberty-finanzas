const { Router } = require("express");
const { getAllPrimas } = require("../controller/prima");

const router = Router();

router.get("/primas", getAllPrimas);

module.exports = {
  router,
};
