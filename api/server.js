const express = require("express");

const server = express();
const accountsRouter = require("../accounts/accountsRouter.js");


server.use(express.json());
server.use(logger);
server.use("/api/accounts", accountsRouter);


server.get('/', (req, res) => {
    res.send(`<h2>Node Database Project - 1</h2>`);
});

function logger(req, res, next) {
    const d = new Date();
    console.log(
      `${req.method} Request Made At URL(${
        req.url
      }) On ${d.getMonth()}/${d.getDay()}/${d.getFullYear()} ${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}:${d.getMilliseconds()}`
    );
    next();
  }

module.exports = server;
