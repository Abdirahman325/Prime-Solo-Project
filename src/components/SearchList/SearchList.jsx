import React from "react";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import SearchPage from "../SearchPage/SearchPage";

function SearchList(){
const search = useSelector((store)=> store.search);
const history = useHistory();


return  ({

});

}export default SearchList;