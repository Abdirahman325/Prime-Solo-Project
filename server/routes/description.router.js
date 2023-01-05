const express = require("express");
const pool = require("../modules/pool");
const router = express.Router();
const axios = require("axios");

router.get("/:id", (req, res) => {
  const id = req.params;
  console.log("books ID:", id);
  axios({
    method: "GET",
    url: `https://www.googleapis.com/books/v1/volumes?`,
    params: {
      q: id,
    },
  })
    .then((response) => {
      console.log(response.data);
      res.send('whats in here?', response.data);
    })
    .catch((err) => {
      console.log(err);
      res.sendStatus(500);
    });
});

module.exports = router;
