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


  router.post("/", (req, res) => {
// post that will post onto dom   
    let sqlQuery = `
        INSERT INTO "books" 
          ("user_id", "cover", "title", "author", "description" )
        VALUES 
          ($1, $2, $3, $4, $5)
      `;
    const sqlValue = [
      req.user.id,
      req.body.cover,
      req.body.title,
      req.body.author,
      req.body.description,
    ];
    pool
      .query(sqlQuery, sqlValue)
      .then((result) => {
        res.sendStatus(201);
      })
      .catch((error) => {
        console.log(`Error in post  `, error);
        res.sendStatus(500);
      });
  });
  