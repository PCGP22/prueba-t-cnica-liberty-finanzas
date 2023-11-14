const primas = require("../data/db simulation.json");
// require("dotenv").config();

console.log(process.env.PASS);
async function getAllPrimas(req, res) {
  try {
    // if("asd)
    return res.send(primas);
  } catch (error) {
    return res.send(error);
  }
}

module.exports = { getAllPrimas };
