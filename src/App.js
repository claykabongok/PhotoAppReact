import React, { useState} from "react";

import Image from "./conpoments/Image";
import ImageRequest from "./conpoments/useImageRequest";
import Header from "./conpoments/Header";
import loadingIcon from "./loadingIcon.gif";
import {Alert, AlertTitle } from '@material-ui/lab';
import './App.css';


function App() {
  
  
  const [query, setQuery] = useState('')
  const [pageNumber, setPageNumber] = useState(1)

  const {loading, error, images} = ImageRequest(query, pageNumber)
 

  
  

  function handleSearchInput(e) {
    e.preventDefault();
    setQuery(e.target.value);
    setPageNumber(1);
  }
  return (
    <div>
      <Header handleSearch={handleSearchInput} />
      <Image ImageData={images}  />
     

      <div>{loading && <img src={loadingIcon} alt="loading" className="loadingIcon"/>}</div>
      <div>{error &&     <Alert severity="error">
  <AlertTitle>Error</AlertTitle>
  Error unable to  retrieve data — <strong>Try again later!</strong>
</Alert>}</div>

  
    </div>
  );
}

export default App;
