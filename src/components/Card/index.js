import React, { useState } from "react";
import { Styledp, Show, RelativdivTitle, Relativdiv, StyledCardWrapper, StyledText, StyledImage, Styledoverview } from "./Card.style"

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