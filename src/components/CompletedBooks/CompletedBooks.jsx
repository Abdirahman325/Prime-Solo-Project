import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";

function completedBooks({ book }) {
  const dispatch = useDispatch();
  const handleDone = () => {
    console.log("?????", book.id);
    dispatch({
      type: "FETCH_ALL_COMPLETE",
      payload: book.id,
    });

    console.log("COMPLETED BOOKS:", book);
  };
  return (
    <>
      <h1>{book.title}</h1>
      <h1>{book.cover}</h1>
      <h1>{book.author}</h1>
      <h1>{book.description}</h1>
      <button onClick={handleDone}></button>
    </>
  );
}

export default completedBooks;
