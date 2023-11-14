const primas = require("../data/db simulation.json");
// require("dotenv").config();

let password = process.env.PASS;
console.log(password);

async function getAllPrimas(req, res) {
  try {
    // if("asd)
    return res.send(primas);
  } catch (error) {
    return res.send(error);
  }
}

module.exports = { getAllPrimas };
