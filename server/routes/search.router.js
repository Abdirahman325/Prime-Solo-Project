const express = require("express");
const pool = require("../modules/pool");
const router = express.Router();
const axios = require("axios");
require("dotenv").config();

// will be used to grab search history from api 
router.get("/:search", (req, res) => {
  const search = req.params.search;
  console.log("/search books");
  axios({
    method: "GET",
    url: `https://www.googleapis.com/books/v1/volumes?q=${search}`,
params: {
          api_key: process.env.SERVER_SESSION_SECRET,
          limit: 1,
        },
      })
        .then((response) => {
          console.log("axios response", response.data);
          res.send(response.data.items);
        }).catch((err) => {
              console.log("error getting books from search", err)
              res.sendStatus(500);
            });
        });
        
        module.exports = router;