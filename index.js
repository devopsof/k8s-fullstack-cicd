const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  const site = process.env.SITE_NAME || "Parth's CI/CD Site";
  const apiKey = process.env.API_KEY || "not-set";

  res.send(`
    <h1>Welcome to ${site}</h1>
    <p>Your API Key is: ${apiKey}</p>
  `);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});