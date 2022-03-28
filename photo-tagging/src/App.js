import React, { useState, useEffect, useRef } from 'react';
import { Flex, ImgContainer } from './Styles/App.Style';
import Dropdown from './Dropdown';
import { getData, writeUser } from './firebase-config';

function App() {
    const [open, setOpen] = useState(false);
    const [x, setX] = useState(0);
    const [y, setY] = useState(0);
    const foundWaldo = useRef(false);
    const foundOdlaw = useRef(false);
    const foundWizard = useRef(false);
    const [time, setTime] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(prevTime => prevTime + 1);
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    function handleClick(event) {
        setOpen(prevState => !prevState);
        setX(event.nativeEvent.offsetX);
        setY(event.nativeEvent.offsetY);
    }

    async function validateOptions(event) {
        event.preventDefault();
        setOpen(prevState => !prevState);
        const data = await getData(event.target.innerText);

        if (x >= data.x1 && x <= data.x2 && y >= data.y1 && y <= data.y2) {
            checkCharacters(event.target.innerText);
        }
        if (foundWaldo.current && foundOdlaw.current && foundWizard.current) {
            console.log('Found all 3');
            console.log(time);
            writeUser();
        }
    }

    function checkCharacters(chars) {
        if (chars === 'waldo') {
            console.log('Found waldo');
            foundWaldo.current = true;
        } else if (chars === 'odlaw') {
            console.log('Found Odlaw');
            foundOdlaw.current = true;
        } else if (chars === 'wizard') {
            console.log('Found wizard');
            foundWizard.current = true;
        }
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
            </Flex>
        </>
    );
}

export default App;
