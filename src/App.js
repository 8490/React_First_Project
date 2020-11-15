import React, { useState, useEffect } from "react";
import axios from "axios";

import './App.css';
import {SearchBox} from "./components/SearchBox";
import {CardList} from "./components/CardList";

const apiKey = "03a84f81bcee477745c480376b8497a2"; //temporary
const baseUrl = "https://api.themoviedb.org/3/search/movie";
const baseImageUrl = "https://image.tmdb.org/t/p/w500";


function App() {

  const [movieList, setMovieList] = useState([]);
  const [inputData, setInputData] = useState("live")

  useEffect(()=>{
      axios.get(
          baseUrl, {params: {
          api_key: apiKey,
          page: 1,
          query: inputData
          }}
      )
      .then((res)=> setMovieList(res?.data?.results))
      .catch()
      .finally()
  },[inputData])

  function ChangeSetInputData(e) {
    setInputData(e.target.value)
  }

  return (
    <div className="App">
      <SearchBox onChange={ChangeSetInputData} />
      <CardList movieList={movieList} baseImageUrl={baseImageUrl} />
    </div>
  );
}

export default App;