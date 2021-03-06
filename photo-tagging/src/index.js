import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/App';
import './Styles/index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Scoreboard from './Components/Scoreboard';

ReactDOM.render(
    <React.StrictMode>
        <Router basename={process.env.PUBLIC_URL}>
            <Routes>
                <Route path='/' element={<App />} />
                <Route path='/scoreboard' element={<Scoreboard />} />
            </Routes>
        </Router>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
