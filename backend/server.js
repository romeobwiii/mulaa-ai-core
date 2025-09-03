const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// Simple AI-like logic
app.post("/ask", (req, res) => {
  const { question } = req.body;

  let answer = "Hello! I'm Mulaa 🤖. Nice to meet you!";
  if (question.toLowerCase().includes("hello")) {
    answer = "Hey there 👋, I'm Mulaa, your assistant!";
  } else if (question.toLowerCase().includes("time")) {
    answer = `⏰ The time now is ${new Date().toLocaleTimeString()}`;
  } else if (question.toLowerCase().includes("name")) {
    answer = "My name is Mulaa, your AI buddy!";
  }

  res.json({ answer });
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Mulaa backend running on port ${PORT}`));