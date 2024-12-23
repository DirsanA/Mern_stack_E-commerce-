import express from "express";

const app = express();
const PORT = 5000;

app.listen(PORT, function () {
  console.log(`The server is listening at port ${PORT}`);
});
