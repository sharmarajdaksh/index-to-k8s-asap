const express = require("express");

const app = express();

app.all("/", (req, res) => {
  res.send({ message: "Hello from Express" });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
