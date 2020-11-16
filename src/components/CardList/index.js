import React, { useContext, createContext } from "react";

import {movieContext} from "../../Movie"   // 3 th parent

import {Card} from "../Card";
import {StyledCardList} from "./CardList.style"

export const CardList = () => {

    const { movieList, baseImageUrl } = useContext(movieContext);
  
    return (
        <StyledCardList>
           {movieList?.map(
               (movie, index) => (
                <Card 
                    key={index} 
                    title={movie.title}
                    poster_path={baseImageUrl + movie.poster_path}
                    overview={movie.overview}
                    id={movie.id}
                    // release_date={movie.release_date}
                    // vote_average={movie.vote_average}
                />
               )
            )}
        </StyledCardList>
    )
}