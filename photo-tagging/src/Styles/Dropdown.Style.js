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
    list-style: none;
    padding: 0;
    margin: 0;
    background-color: red;

    &:hover {
        cursor: pointer;
    }
`;
