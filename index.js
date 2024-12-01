const express = require("express");
const app = express();
const port = 3001;

app.use(express.json());

const messages = [];

app.get("/", (_, res) => {
  res.send("Hello World!");
});

app.get("/findMessages", (_, res) => {
  res.status(200).json({ messages });
});

app.post("/message", (req, res) => {
  const { user, text } = req.body;

  if (!user || !text) {
    return res.status(400).json({ error: "Please provide a valid input" });
  }

  const message = {
    user,
    text,
    timestamp: new Date().toISOString(),
  };

  messages.push(message);

  res.status(200).json({ message });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

module.exports = { app, messages };
