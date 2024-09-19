import styled from "styled-components";

interface StyledSizeProps {
    width?: string;
    height?: string;
}

export const ColumnDiv = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
`

export const RowDiv = styled.div<StyledSizeProps>`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 15vh;
    width: ${props => props.width || '100%'};
    margin: auto auto;

    @media (max-width: 600px) {
        width: 8  0vw;
    }
`

export const StyledImg = styled.img<StyledSizeProps>`
    width: ${props => props.width || '100%'};
    height: ${props => props.height || 'auto'};
    border-radius: 10%;
        @media (max-width: 600px) {
        display: none;
    }
`;

export const SyledImgSmall = styled.img<StyledSizeProps>`
    width: ${props => props.width || '100%'};
    height: ${props => props.height || 'auto'};
    border-radius: 10%;
    @media (min-width: 600px) {
        display: none;
    }
`;