import React from 'react';
import {
    Container,
    DropdownContainer,
    UnorderedList,
    List,
} from './Styles/Dropdown.Style';

export default function Dropdown(props) {
    return (
        <Container horizontal={props.horizontal} vertical={props.vertical}>
            <DropdownContainer>
                <UnorderedList>
                    <List onClick={props.handleOptions}>waldo</List>
                    <List onClick={props.handleOptions}>odlaw</List>
                    <List onClick={props.handleOptions}>wizard</List>
                </UnorderedList>
            </DropdownContainer>
        </Container>
    );
}
