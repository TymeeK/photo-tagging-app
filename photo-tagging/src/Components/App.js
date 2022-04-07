import React, { useState, useEffect, useRef } from 'react';
import { Flex, ImgContainer, NavContainer } from '../Styles/App.Style';
import Dropdown from './Dropdown';
import { getData, writeUser } from './firebase-config';
import { useNavigate } from 'react-router-dom';
import Popup from './Popup';

function App() {
    const [open, setOpen] = useState(false);
    const [x, setX] = useState(0);
    const [y, setY] = useState(0);
    const foundWaldo = useRef(false);
    const foundOdlaw = useRef(false);
    const foundWizard = useRef(false);
    const [time, setTime] = useState(0);
    const [showDialog, setShowDialog] = useState(false);
    const timeRef = useRef(0);
    let navigate = useNavigate();

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
            timeRef.current = time;
            setShowDialog(prevDialog => !prevDialog);
        }
    }

    function checkCharacters(chars) {
        if (chars === 'waldo') {
            foundWaldo.current = true;
        } else if (chars === 'odlaw') {
            foundOdlaw.current = true;
        } else if (chars === 'wizard') {
            foundWizard.current = true;
        }
    }

    function handleKeyDown(event) {
        if (event.key === 'Enter') {
            setShowDialog(prevDialog => !prevDialog);
            event.preventDefault();
            writeUser(event.target.value, timeRef.current);
            navigate('/scoreboard');
        }
    }

    return (
        <>
            <NavContainer>
                <h1>Where's Waldo</h1>
                <h1>{time} seconds</h1>
            </NavContainer>
            <Flex>
                <ImgContainer>
                    <img
                        onClick={handleClick}
                        src={require('../Images/waldo.jpg')}
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
                {/* {showDialog && (
                
                )} */}
                <Popup trigger={showDialog}>
                    <form>
                        <label htmlFor=''>
                            Congratulations! you found all Waldo, Odlaw, and
                            Wizard in {timeRef.current} seconds
                        </label>
                        <br />
                        <label htmlFor='username'>Enter your username</label>
                        <input type='text' onKeyDown={handleKeyDown} />
                    </form>
                </Popup>
            </Flex>
        </>
    );
}

export default App;
