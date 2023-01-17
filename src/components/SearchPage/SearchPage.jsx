import React from 'react';
import { useSelector } from 'react-redux';
import {useDispatch} from 'react-redux';
import {useState} from 'react';
import {useHistory} from 'react-router-dom'
import axios from 'axios';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';


function SearchPage(){
    // using a dispatch to call and search for the type and setting the payload to local state
    const dispatch= useDispatch();
    const [search,setSearch]=useState('');    
    const handleSubmit = (event)=>{
        event.preventDefault();
        dispatch({
            type: "FETCH_SEARCH",
            payload: search,
        }); 
        console.log('searching for book: ' + search);
        setSearch('');

    }
    // returning all search types of books: 
    return (
        <>
        <h1>SEARCH PAGE</h1>
            <section>
               <form onSubmit= {handleSubmit}>
                <label>
                    <TextField id="standard-basic" label="Standard" variant="standard" 
                  type="search"
                  placeholder="What book are you looking for?"
                  value = {search}
                  onChange={(evt) => setSearch(evt.target.value)}/>
                <button className="btn btn-block">Search</button>
                </label>
             </form>

        </section>
        </>


        )
    } export default SearchPage;