import styled, { css } from "styled-components";

export const StyledSearchBox = styled.div`
   text-align: center;
  padding-top: 10px;
  background-color: rgb(201, 17, 17);
  width:100%;
  height: 51px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: sticky;
  top: 0;
  z-index:1;
`;
export const StyledSearchInput = styled.input`
   width: 400px;
  padding: 14px;
  border-radius: 10px;
  border: 1px solid darkred;
  background-color: rgb(255, 255, 255);
  @media (max-width: 476px)  {
    width: 80%;
  }
`;


// export const StyledSearchBoxInput = styled.input`
//     color: black;
//     /* ${p => p.iscolored} */


//     /* color: ${p => p.color}; */
//     border-radius: 0.3rem;
//     margin-right: 0.5rem;
// `;

// export const StyledSearchBox = styled.div`
//     margin: 2rem;

//     /* input {
//         color: blue;
//         border-radius: 0.3rem;
//         margin-right: 0.5rem;
//     } */

//     ${StyledSearchBoxInput} {
//         color: gray;
//     }
// `;

// export const StyledSearchInput = styled.input`
//     color: black;
//     ${ p => p.isColored &&
//         css`
//            color: red;
//         `
//     }
//         border-radius: 0.3rem;
//         margin-right: 0.5rem;
// `;






// export const StyledButton = styled.button`
//     border-radius: 0.2rem;
// `;

// export const StyledSearchButton = styled(StyledButton)`
//     cursor: pointer;
// `;



