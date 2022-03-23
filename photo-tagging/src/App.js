import React, { useState, useEffect } from 'react';
import { Flex } from './Styles/App.Style';

//Waldo is between x coordinate 980 and 1010, and y coordinate 355 and 410

function App() {
    const [x, setX] = useState();
    const [y, setY] = useState();

    function handleClick(event) {
        console.log(event.nativeEvent.offsetX);
        console.log(event.nativeEvent.offsetY);
    }
    return (
        <>
            <Flex>
                <img
                    onClick={handleClick}
                    src={require('./Images/waldo.jpg')}
                    alt='waldo'
                />
                <h1>x: {x}</h1>
                <h1>y: {y}</h1>
            </Flex>
        </>
    );
}

export default App;
