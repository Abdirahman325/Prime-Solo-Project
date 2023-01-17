import React from 'react';

// This is one of our simplest components
// It doesn't have local state,
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is'

function AboutPage() {
  return (
    <div className="container">
     <h3>Technologies Used</h3>
      <ul>
        <ol>React</ol>
        <ol>Redux</ol>
        <ol>Sagas</ol>
        <ol>Material UI</ol>
        <ol>Node</ol>
        <ol>Express</ol>
        <ol>Google Books API</ol>
        <ol>Postico</ol>
        <ol>Figma</ol>
        <ol>PostgresSQL</ol>
      </ul>

      <h3>Thank You</h3>
      <ul>
        <ol>Dane/Key/Liz</ol>
        <ol> Shawl Cohort</ol>
        <ol> Prime Academy</ol>
        <ol> Friends and Family</ol>
      </ul>

      <h3>Contact Me</h3>
      <ul>
        <ol>https://www.linkedin.com/in/abdirahman-farah-a98842255/</ol>
        <ol>abdirahmanfarah122@gmail.com</ol>
        </ul>

    </div>
  );
}

export default AboutPage;
