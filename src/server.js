const express = require("express");
const app = express();

app.get("/", (req,res) => {
res.json({"message" : "NFT Marketplace API is running"});
});

const PORT = 5000;

app.listen(PORT,(req,res) => {
console.log(`Server running on port ${PORT}`)
});
