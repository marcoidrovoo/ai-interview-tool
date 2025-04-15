const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const OpenAI = require("openai");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(bodyParser.json());

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

app.post("/api/interview", async (req, res) => {
  try {
    const { messages, model = "gpt-3.5-turbo" } = req.body;

    const response = await openai.chat.completions.create({
      model,
      messages,
      temperature: 0.7,
    });

    const reply = response?.choices?.[0]?.message?.content;

    if (!reply) {
      throw new Error("No reply returned from OpenAI");
    }

    res.json({ reply });
  } catch (err) {
    console.error("OpenAI error:", err.message);
    res.status(500).json({ error: err.message || "Something went wrong" });
  }
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
