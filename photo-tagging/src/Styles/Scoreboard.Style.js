import styled from 'styled-components';

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
