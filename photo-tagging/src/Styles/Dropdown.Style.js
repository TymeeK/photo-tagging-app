import styled from 'styled-components';

export const Container = styled.div`
    position: absolute;
    top: ${props => props.vertical}px;
    left: ${props => props.horizontal}px;
`;
export const DropdownContainer = styled.div`
    position: absolute;
    width: 80px;
`;

export const UnorderedList = styled.ul`
    text-align: center;
    list-style: none;
    padding: 0;
    margin: 0;
    background-color: white;

    &:hover {
        cursor: pointer;
    }
`;

export const List = styled.li`
    border-bottom: 1px solid black;
    &:hover {
        background-color: gray;
    }
`;
