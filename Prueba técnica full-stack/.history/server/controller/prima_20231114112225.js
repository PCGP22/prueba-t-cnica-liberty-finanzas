const primas = require("../data/db simulation.json");
require("dotenv").config();

let password = process.env.PASS;
async function getAllPrimas(req, res) {
  try {
    console.log(pass);
    if (req.params.pass != password) {
      return res.status(403).send("Access denied" + req.params.pass);
    }
    return res.send(primas);
  } catch (error) {
    return res.send(error);
  }
}

module.exports = { getAllPrimas };
