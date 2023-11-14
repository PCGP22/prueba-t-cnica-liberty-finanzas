const primas = require("../data/db simulation.json");

async function getAllPrimas(req, res) {
  try {
    return res.send(primas);
  } catch (error) {
    return res.send(error);
  }
}
