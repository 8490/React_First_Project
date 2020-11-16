import { useState, useRef, useContext } from 'react';
import {StyledSearchBox, StyledSearchInput, StyledSearchButton} from "./SearchBox.style"
import { movieContext } from "../../Movie";

export const SearchBox = () => {
    // const [inputValue, setInputValue] = useState("");

    const { setInputData } = useContext(movieContext);
    
    return (
        <StyledSearchBox>
            <StyledSearchInput 
                isColored={false} 
                placeholder='Search your movie...'
                onChange={(e)=> setInputData(e.target.value)}
            />
           
           
           
           


           {/* <StyledSearchInput isColored={false} onChange={(e)=>setInputValue(e.target.value)}/>
           <StyledSearchButton onClick={()=>setSearchKeyword(inputValue)}>Search</StyledSearchButton>  */}
        </StyledSearchBox>
    )
}


// export const SearchBox = ({setSearchKeyword}) => {
//     const inputRef = useRef();

//     return (
//         <StyledSearchBox>
//            <StyledSearchInput ref={inputRef} isColored={false}/>
//            <StyledSearchButton onClick={()=>setSearchKeyword(inputRef?.current?.value)}>Search</StyledSearchButton> 
//         </StyledSearchBox>
//     )
// }