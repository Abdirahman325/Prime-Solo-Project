import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";

function completedBooks({ books }) {
  const dispatch = useDispatch();

  const handleDone = () => {
    console.log("?????", books.id);
    dispatch({
      type: "FETCH_ALL_COMPLETE",
      payload: books.id,
    });

    console.log("COMPLETED BOOKS:", books);
  };
  const handleDelete = () => {
    console.log("?????", books.id);
    dispatch({
      type: "FETCH_DELETE",
      payload: books.id,
    });
}
  return (
    <>
      <h1>{books.title}</h1>
      <img src={books.cover} />
      <h1>{books.author}</h1>
      <h1>{books.description}</h1>
      <button onClick={handleDone}> complete </button>
      <button onClick={handleDelete}> delete </button>

    </>
  );
}

export default completedBooks;
