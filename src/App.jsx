import React from 'react';
import Navbar from './components/Navbar';
import OneBlock from './components/OneBlock';


function App() {
    return (

        <React.StrictMode>
            <React.Fragment>
                <Navbar />
                <OneBlock />
            </React.Fragment>
        </React.StrictMode>    
    );
}

export default App;