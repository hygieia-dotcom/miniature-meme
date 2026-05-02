import express from "express";
import fetch from "node-fetch";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.get("/api/condition", async (req, res) => {
  const { lat, lon } = req.query;

  try {
    const apiKey = process.env.OPENWEATHER_API_KEY;

    const weatherRes = await fetch(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`
    );

    const data = await weatherRes.json();

    res.json({
      score: 2,
      factors: { pressure: 1, humidity: 1, temperature: 0 },
      raw: { pressureDiff: -3, humidity: 70, tempDiff: 5 }
    });

  } catch (err) {
    res.status(500).json({ error: "failed" });
  }
});

app.listen(3000, () => console.log("Server running"));
