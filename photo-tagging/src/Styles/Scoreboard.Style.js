import styled from 'styled-components';

// export const Grid = styled.div`
//     display: grid;
//     grid-template-rows: repeat(${props => props.numUsers}, 100px);
//     height: 100vh;
//     width: 1000px;
//     background-color: brown;
//     font-weight: bold;
//     font-size: 25px;
// `;

export const Flex = styled.div`
    display: flex;
    justify-content: center;
    height: 100vh;
    width: 100vw;
`;

export const Table = styled.table`
    border: 2px solid black;
    width: 1000px;
    height: 500px;
`;

export const TableHeader = styled.th`
    border-bottom: 1px solid black;
    background-color: forestgreen;
`;

export const TableDetails = styled.td`
    text-align: center;
    border-bottom: 1px solid black;
    font-size: 35px;
`;
// export const Element = styled.div`
//     display: flex;
//     align-items: center;
//     border-bottom: 1px solid black;
//     border-left: 1px solid black;
//     border-right: 1px solid black;
//     margin-top: 0.5px;
//     padding-left: 20px;
// `;
