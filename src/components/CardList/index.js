import {Card} from "../Card";
import {StyledCardList} from "./CardList.style"

export const CardList = ({movieList, baseImageUrl}) => {
  
    return (
        <StyledCardList>
           {movieList?.map(
               (movie, index) => (
                <Card 
                    key={index} 
                    title={movie.title}
                    poster_path={baseImageUrl + movie.poster_path}
                    overview={movie.overview}
                    release_date={movie.release_date}
                    vote_average={movie.vote_average}
                />
               )
            )}
        </StyledCardList>
    )
}
