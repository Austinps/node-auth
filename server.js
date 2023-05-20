require("dotenv").config();
const express = require("express");
const app = express();

const PORT = process.env.PORT || 3500;

app.get("/", (req, res) => res.send("hello"));

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
