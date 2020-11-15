import {StyledCardWrapper, StyledText, StyledMovieImage} from "./Card.style"

export const Card = ({title, imgSrc}) => {
    return (
        <StyledCardWrapper>
            <StyledMovieImage src={imgSrc} alt=""/>
            <StyledText>{title}</StyledText>
            {/* <p>{props.overview}</p> */}
        </StyledCardWrapper>
    )
}