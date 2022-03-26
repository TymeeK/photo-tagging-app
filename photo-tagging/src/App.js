import React, { useState, useEffect } from 'react';
import { Flex, ImgContainer } from './Styles/App.Style';
import Dropdown from './Dropdown';
import { getData } from './firebase-config';

//Waldo is between x coordinate 980 and 1010, and y coordinate 355 and 410

function App() {
    const [open, setOpen] = useState(false);
    const [x, setX] = useState(0);
    const [y, setY] = useState(0);
    const [userChoice, setUserChoice] = useState();

    function handleClick(event) {
        setOpen(prevState => !prevState);
        setX(event.nativeEvent.offsetX);
        setY(event.nativeEvent.offsetY);
    }

    function validateOptions(event) {
        event.preventDefault();
        setUserChoice(event.target.innerText);
        setOpen(prevState => !prevState);
        getData(event.target.innerText);
    }

    return (
        <>
            <Flex>
                <ImgContainer>
                    <img
                        onClick={handleClick}
                        src={require('./Images/waldo.jpg')}
                        alt='waldo'
                    />
                    {open && (
                        <Dropdown
                            horizontal={x}
                            vertical={y}
                            handleOptions={validateOptions}
                        />
                    )}
                </ImgContainer>

                <h1>x: {x}</h1>
                <h1>y: {y}</h1>
            </Flex>
        </>
    );
}

export default App;
