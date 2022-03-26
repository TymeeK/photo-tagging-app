import React from 'react';
import {
    Container,
    DropdownContainer,
    UnorderedList,
} from './Styles/Dropdown.Style';

export default function Dropdown(props) {
    return (
        <Container horizontal={props.horizontal} vertical={props.vertical}>
            <DropdownContainer>
                <UnorderedList>
                    <li onClick={props.handleOptions}>waldo</li>
                    <li onClick={props.handleOptions}>odlaw</li>
                    <li onClick={props.handleOptions}>wizard</li>
                </UnorderedList>
            </DropdownContainer>
        </Container>
    );
}
