const primas = require("../data/db simulation.json");
require("dotenv").config();

let password = process.env.PASS;

async function getAllPrimas(req, res) {
  try {
    let { pass } = req.body.pass;
    if (pass != password) {
      return res.status(403).send("Access denied");
    }
    return res.send(primas);
  } catch (error) {
    return res.send(error);
  }
}

module.exports = { getAllPrimas };
