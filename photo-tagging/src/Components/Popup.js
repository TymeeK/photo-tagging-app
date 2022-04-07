import React from 'react';
import { Container, InnerPopup, CloseButton } from '../Styles/Popup.Style';

export default function Popup(props) {
    return props.trigger ? (
        <Container>
            <InnerPopup>{props.children}</InnerPopup>
        </Container>
    ) : (
        ''
    );
}
