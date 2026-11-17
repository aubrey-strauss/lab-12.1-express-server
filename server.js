const express = require("express");
const path = require("path");
const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// When someone visits "/contact", send them the contact page file
app.get("/contact", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "contact.html"));
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
