const express = require("express");

const PORT = process.env.PORT || 3001;

const app = express();

app.get("/api", (req, res) => {
  const email = "example@example.com";
  const cpf = "123.456.789-00";
  res.json({ message: "Hoje eu consigo essa vaga!", email, cpf });
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});