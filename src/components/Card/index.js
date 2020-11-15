import React, { useState } from "react";
import { Styledp, Show, RelativdivTitle, Relativdiv, StyledCardWrapper, StyledText, StyledImage, Styledowerview } from "./Card.style"

export const Card = (props) => {
    const [showData, setShowData] = useState('none');
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
        <div>
            <StyledCardWrapper>
                <div>
                    <Show onMouseOver={showOverview} onMouseOut={DontshowOverview} onClick={showOverview}>
                        <Relativdiv>
                            <Styledowerview style={{ display: showData }}>
                                <Styledp>{props.overview}</Styledp>
                            <Styledp>Release Date: {props.release_date}</Styledp>
                                <Styledp style={{ color: 'yellow', fontSize: 15 }}>Avarage Vote: {props.vote_average}</Styledp>
                            </Styledowerview>
                            <StyledImage src={props.poster_path} alt='movie poster'/>
                        </Relativdiv>
                    </Show>
                    <RelativdivTitle>
                        <StyledText>{props.title}</StyledText>
                    </RelativdivTitle>
                </div>
            </StyledCardWrapper>
        </div>
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