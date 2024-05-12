const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Data = require('../models/Stock.js');

router.get('/',async (req, res, next) => {
    Data.find().then(function(Stocks){
        res.json(Stocks);
     })
})

router.post("/", async (req, res) => {
  let today = new Date();
  let day = today.toDateString();
  let hour = today.getHours();
  let min = today.getMinutes();
  let sec = today.getSeconds();
  let result = (day + "," + hour + ":" + min + ":" + sec)
  const data1 = {
      Apple: Math.floor(Math.random() * (5000 - 100 + 1) + 100),
      Samsung: Math.floor(Math.random() * (5000 - 100 + 1) + 100),
      Tesla: Math.floor(Math.random() * (5000 - 100 + 1) + 100),
      time: result
    };
    Data.insertMany(data1)
    res.json("done");
});
  
router.delete("/", async (req, res) => {
  try {
      await Data.deleteMany({ __v: 0 });
      res.json("done");
  } catch (err) {
      console.error(err);
      res.status(500).json({ error: "An error occurred while deleting data." });
  }
});
module.exports = router;
