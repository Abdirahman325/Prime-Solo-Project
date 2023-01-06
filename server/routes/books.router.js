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

  // get to retrieve all books that were marked completed
  router.get("/", (req, res) => {
    const query = `
        SELECT * 
        FROM books
        WHERE complete = true
        ORDER BY "title" ASC;
      `;
    pool
      .query(query)
      .then((result) => {
        res.send("successful:",  result.rows);
      })
      .catch((err) => {
        console.log("error getting completed books", err);
        res.sendStatus(500);
      });
  });
   // put that grabs by id 
   router.put("/:id", (req, res) => {
      const id = req.params.id;
      console.log("put for id: ", id);
      let sqlQuery = `UPDATE "books" SET "complete" = $1 WHERE "id" = $2`;
      const sqlParams = [true, id];
      pool
        .query(sqlQuery, sqlParams)
        .then(() => { 
          res.sendStatus(204);
        })
        .catch((error) => {
        console.log('in put compleplete: ',error)
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

    router.delete("/:id", (req, res) => {
          const id = req.params.id;
          console.log("Delete by id", id);
          let sqlQuery = `
        DELETE FROM "books"
        WHERE "id" = $1;
           `
          const sqlParams = [id];
          pool
            .query(sqlQuery, sqlParams)
            .then(() => {
              console.log("book has been deleted");
              res.sendStatus(200);
            })
            .catch((error) => {
              console.log(`Error deleting books in db`, error);
              res.sendStatus(500);
            });
        });
module.exports = router;