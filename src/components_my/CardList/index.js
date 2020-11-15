import React, { useState, useEffect } from "react";
import {Card} from "../Card";
import axios from "axios";
import {StyledCardList} from "./CardList.style"

const apiKey = "03a84f81bcee477745c480376b8497a2"; //temporary
const baseUrl = "https://api.themoviedb.org/3/search/movie";
const baseImageUrl = "https://image.tmdb.org/t/p/w500";



// adult: false
// backdrop_path: "/zqkmTXzjkAgXmEWLRsY4UpTWCeo.jpg"
// genre_ids: (3) [12, 28, 878]
// id: 11
// original_language: "en"
// original_title: "Star Wars"
// overview: "Princess Leia is captured and held hostage by the evil Imperial forces in their effort to take over the galactic Empire. Venturesome Luke Skywalker and dashing captain Han Solo team together with the loveable robot duo R2-D2 and C-3PO to rescue the beautiful princess and restore peace and justice in the Empire."
// popularity: 70.339
// poster_path: "/6FfCtAuVAW8XJjZ7eWeLibRLWTw.jpg"
// release_date: "1977-05-25"
// title: "Star Wars"
// video: false
// vote_average: 8.2
// vote_count: 14549

export const CardList = () => {
    const [movieData, setMovieData] = useState(null);
    useEffect(() =>{
        axios.get(baseUrl,{
            params:{
                api_key: apiKey,
                page:1,
                query:'Star Wars' //TODO: from input
            }
        })
        .then((res) => {
            setMovieData(res.data.results)
            console.log(res.data.results)
        }   
        )
        .catch((err) => console.log(err))
    },[])
    return (
        <StyledCardList>
            { movieData && movieData.map((movie, index, ) =>{
                return (
                    <Card 
                        key={index}
                        title={movie.title}
                        imgSrc={baseImageUrl + movie.poster_path}
                        overview={movie.overview}
                    
                    />                    
                )
            } )
                
            }
        </StyledCardList>
    )
}