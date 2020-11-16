import React, { useState, useEffect, createContext } from "react";
import axios from "axios";

import {VideoSection} from "./components/VideoSection";

import {SearchBox} from "./components/SearchBox";
import {CardList} from "./components/CardList";

const apiKey = "03a84f81bcee477745c480376b8497a2"; //temporary
const baseUrl = "https://api.themoviedb.org/3/search/movie"; 
  
const baseImageUrl = "https://image.tmdb.org/t/p/w500";

export const movieContext = createContext();

function Movie() {

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

 

  return (
    <movieContext.Provider value={{movieList, baseImageUrl, setInputData }}>
      <VideoSection />
      <SearchBox />
      <CardList />
    </movieContext.Provider>
  );
}

export default Movie;