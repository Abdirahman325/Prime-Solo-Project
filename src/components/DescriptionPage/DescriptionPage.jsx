import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
// import description from "../../redux/reducers/description.reducer";

function descriptionPage() {
  const details = useSelector((store) => store.description);
  //   const selection = useSelector((store) => store.search);
  const history = useHistory();
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch({
      type: "FETCH_DESCRIPTION",
      payload: id,
    });
    details;
    dispatch({ type: "FETCH_DATABASE" });
  }, []);

  const bookCover = (event) => {
    const title = event.target.title;
    const cover = event.target.getAttribute("cover");
    const author = event.target.getAttribute("author");
    const description = event.target.getAttribute("description");
    dispatch({
      type: "FETCH_BOOKS",
      payload: {
        title,
        cover,
        author,
        description,
      },
    });
    history.push("/library");
  };
  console.log("contains:", details);

  return (
    <>
                  
      <img
        src={details.volumeInfo && details.volumeInfo.imageLinks.smallThumbnail}
      />
                <h1>{details.volumeInfo && details.volumeInfo.title}</h1>
                <h2> {details.volumeInfo && details.volumeInfo.authors}</h2>
                <h2>{details.volumeInfo && details.volumeInfo.description}</h2>
                    
      <button
        title={details.volumeInfo && details.volumeInfo.title}
        author={details.volumeInfo && details.volumeInfo.authors}
        cover={
          details.volumeInfo && details.volumeInfo.imageLinks.smallThumbnail
        }
        description={details.volumeInfo && details.volumeInfo.description}
        onClick={bookCover}
      >
                  add to library        
      </button>
          
    </>
  );
}
export default descriptionPage;
