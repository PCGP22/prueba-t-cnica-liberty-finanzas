const express = require("express");

const { getAllPrimas } = require("../controller/prima");

const router = express.Router();

router.get("/primas:pass", getAllPrimas);

module.exports = {
  router,
};
