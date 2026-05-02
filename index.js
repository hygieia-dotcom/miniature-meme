const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("OK");
});

app.get("/api/condition", (req, res) => {
  res.json({
    score: 2,
    factors: { pressure: 1, humidity: 1, temperature: 0 },
    raw: { pressureDiff: -3.2, humidity: 75, tempDiff: 5 }
  });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});
