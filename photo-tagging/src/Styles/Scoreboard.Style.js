import styled from 'styled-components';

export const Grid = styled.div`
    display: grid;
    grid-template-rows: repeat(${props => props.numUsers}, 25px);
    height: 100vh;
    width: 100vw;
`;
