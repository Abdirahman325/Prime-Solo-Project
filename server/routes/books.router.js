const express = require("express");
const pool = require("../modules/pool");
const router = express.Router();

// getting all books from database
router.get("/", (req, res) => {
    const query = `
        SELECT * 
        FROM books
        ORDER BY "title" ASC;
      `;
    pool
      .query(query)
      .then((result) => {
        res.send(result.rows);
      })
      .catch((err) => {
        console.log("ERROR: getting books", err);
        res.sendStatus(500);
      });
  });