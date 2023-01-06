import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import CompletedBooks from "../CompletedBooks/CompletedBooks";
// import booksSaga from "../../redux/sagas/books.saga";

function libraryPage() {
  const dispatch = useDispatch();
  const books = useSelector((store) => store.books); 

    useEffect(() => {
        dispatch({ type: "FETCH_DATABASE" });
        console.log("is it showing content?", books);
      }, []);
    

  return(
    <>
    {
        books.map((book)=>{
            return <CompletedBooks key= {book.id} books={book} />
        })
    }
    </>
  )
}
export default libraryPage;
