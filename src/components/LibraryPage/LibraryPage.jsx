import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import CompletedBooks from "../CompletedBooks/CompletedBooks";
import Container from '@mui/material/Container';
import Card from '@mui/material/Card'
import CardMedia from '@mui/material/CardMedia';
// import booksSaga from "../../redux/sagas/books.saga";



function libraryPage() {
  const dispatch = useDispatch();
  const books = useSelector((store) => store.books); 

    useEffect(() => {
        dispatch({ type: "FETCH_DATABASE" });
        console.log("is it showing content?", books);
      }, []);
    

  return(
    
    <Container>
      {/* <Card sx={({'height':'40vh'})}variant="outlined">
      <CardMedia
       component="img"
       alt="books"
       height="140"
       image="" />
      </Card> */}
      <h1>MY LIBRARY</h1>
    {
        books.map((book)=>{
            return <CompletedBooks key= {book.id} books={book} />
        })
    }
    </Container>
  )
}
export default libraryPage;
