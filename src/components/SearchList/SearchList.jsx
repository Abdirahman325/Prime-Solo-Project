import React from "react";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import SearchPage from "../SearchPage/SearchPage";

function SearchList(){
const search = useSelector((store)=> store.search);
const history = useHistory();


return (
        <>
          <SearchPage />
    
          {search &&
    search.map((list) => {
              let thumbnail =
    list.volumeInfo.imageLinks &&
    list.volumeInfo.imageLinks.smallThumbnail;
              console.log("list of books:", list.volumeInfo.title);
              return (
                <>
                  <div
                    key={list.id}
                    onClick={() => history.push(`/details/${list.id}`)}
                  >
                    <h3 className="title">{list.volumeInfo.title}</h3>
                    <img src={thumbnail}></img>
                  </div>
                
                </>
              );
            })}
        </>
      );
    } export default SearchList;