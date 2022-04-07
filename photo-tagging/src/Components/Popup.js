import React from 'react';
import { Container, InnerPopup, CloseButton } from '../Styles/Popup.Style';

export default function Popup(props) {
    return props.trigger ? (
        <Container>
            <InnerPopup>
                <CloseButton>Close</CloseButton>
                {props.children}
            </InnerPopup>
        </Container>
    ) : (
        ''
    );
}
