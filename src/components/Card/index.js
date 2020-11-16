import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import { Styledp, Show, RelativdivTitle, Relativdiv, StyledCardWrapper, StyledText, StyledImage, Styledoverview, StyledMovieImage } from "./Card.style"

export const Card = (props) => {
    const [showData, setShowData] = useState('none');

    const history = useHistory();

    function showOverview() {
        if (showData === 'none') {
            setShowData('block')
        };
    }

    function DontshowOverview() {
        if (showData === 'block') {
            setShowData('none')
        };
    }
    
    return (
        <StyledCardWrapper onClick={() => history.push(`/detail/${props.id}`)}>
            <Show onMouseOver={showOverview} onMouseOut={DontshowOverview} >
                <Relativdiv>
                    <Styledoverview style={{ display: showData }}>
                        <Styledp>{props.overview}</Styledp>
                        <Styledp>Release Date: {props.release_date}</Styledp>
                        <Styledp style={{ color: 'yellow', fontSize: 15 }}>Avarage Vote: {props.vote_average}</Styledp>
                    </Styledoverview>
                    
                    <StyledImage src={props.poster_path} alt='movie poster'/>
                </Relativdiv>

                <RelativdivTitle>
                    <StyledText>{props.title}</StyledText>
                </RelativdivTitle>
            </Show>
        </StyledCardWrapper>
       
    )
}


















// import {StyledCardWrapper, StyledText, StyledMovieImage} from "./Card.style"

// export const Card = ({title, imgSrc}) => {
//     return (
//         <StyledCardWrapper>
//             <StyledMovieImage src={imgSrc} alt={"Movie Poster"}/>
//             <StyledText>{title}</StyledText>
//         </StyledCardWrapper>
//     )
// }