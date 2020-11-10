import './App.scss';

import React from 'react';

import logo from '@assets/images/half-circle.svg';

function App () {
    return (
        <div className="tc">
            <header className="vh-100 bg-dark-blue flex flex-column items-center justify-center">
                <img src={logo} className="w5" alt="logo" />
                <p className="white">
                    Edit <code>src/App.tsx</code> and save to reload.
                </p>
                <a className="white b f3" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
                    Learn React
                </a>
            </header>
        </div>
    );
}

export default App;
