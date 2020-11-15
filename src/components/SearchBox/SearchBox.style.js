import styled, { css } from "styled-components";

export const StyledButton = styled.button`
    border-radius: 0.2rem;
`;

export const StyledSearchButton = styled(StyledButton)`
    cursor: pointer;
`;

export const StyledSearchInput = styled.input`
    color: black;
    ${ p => p.isColored &&
        css`
           color: red;
        `
    }
        border-radius: 0.3rem;
        margin-right: 0.5rem;
`;

export const StyledSearchBoxInput = styled.input`
    color: black;
    /* ${p => p.iscolored} */


    /* color: ${p => p.color}; */
    border-radius: 0.3rem;
    margin-right: 0.5rem;
`;

export const StyledSearchBox = styled.div`
    margin: 2rem;

    /* input {
        color: blue;
        border-radius: 0.3rem;
        margin-right: 0.5rem;
    } */

    ${StyledSearchBoxInput} {
        color: gray;
    }
`;

