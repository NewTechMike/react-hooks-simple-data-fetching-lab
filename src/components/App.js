// create your App component here

import { json } from "body-parser"
import React, { useEffect, useState } from "react"

function App(){
  const [dogPictures, setDogPictures ] = useState([]);
  const [loaded, setLoaded] = useState(false);
// use the fetch request to the API: 
// https://dog.ceo/api/breeds/image/random

// Display in a P tag "loading..." as the first render
// When getting response from API, load image in an <img> tag
// with alt set to "A Random Dog"

  useEffect (() => {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((resp) => resp.json())
      .then((data) => { 
        setDogPictures(data.message);
        setLoaded(true);
      });
    },[]);

  if (!loaded) return <p>Loading...</p>;
    
  return (
    <div>
      <img alt={"A Random Dog"} src={dogPictures}/> 
    </div>
  );
}

export default App;