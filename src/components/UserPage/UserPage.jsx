import React from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import {useSelector} from 'react-redux';
import './UserPage.css';

function UserPage() {
  // this component doesn't do much to start, just renders some user reducer info to the DOM
  const user = useSelector((store) => store.user);
  return (
    
    <div className="container">
      <h3> HOME </h3>
      <h2>Welcome Bookster, {user.username}!</h2>
      <img className='books_img' src='../images/bookzz.jpeg'/>
    
    </div>
  );
}

// this allows us to use <App /> in index.js
export default UserPage;
