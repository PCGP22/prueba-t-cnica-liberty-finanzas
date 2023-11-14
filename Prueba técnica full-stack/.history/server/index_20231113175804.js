const express = require("express");
const cors = require("cors");
const { router } = require("./routes/router");

const server = express();

const PORT = 5000;

server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

server.use(cors({ origin: true, credentials: true }));
server.use(router);
