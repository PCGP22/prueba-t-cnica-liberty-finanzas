const primas = require("../data/db simulation.json");
// require("dotenv").config();

async function getAllPrimas(req, res) {
  try {
    console.log(process.env.pass);
    // if("asd)
    return res.send(primas);
  } catch (error) {
    return res.send(error);
  }
}

module.exports = { getAllPrimas };
