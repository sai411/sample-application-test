const express = require("express");
const axios = require("axios");

const app = express();
const PORT = 3000;

// URL of Java Microservice
const JAVA_SERVICE = "http://localhost:8081";

app.get("/start/:data", async (req, res) => {
  const { data } = req.params;

  try {
    // Forward to Java service (which will call Python)
    const response = await axios.get(`${JAVA_SERVICE}/process/${data}`);
    res.json(response.data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.listen(PORT, () => {
  console.log(`API Layer running at http://localhost:${PORT}`);
});
