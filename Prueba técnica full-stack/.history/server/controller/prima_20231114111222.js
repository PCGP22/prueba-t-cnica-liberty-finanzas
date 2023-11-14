const primas = require("../data/db simulation.json");
require("dotenv").config();

let password = process.env.PASS;
console.log("693C2D60A4FE340105FD1278A96805D9" === password);
async function getAllPrimas(req, res) {
  try {
    let pass = req.params.pass;
    if (pass != password) {
      return res.status(403).send("Access denied");
    }
    return res.send(primas);
  } catch (error) {
    return res.send(error);
  }
}

module.exports = { getAllPrimas };
