import React from 'react';
import Navbar from './components/Navbar';
import OneBlock from './components/OneBlock';
import DataFix from './components/DataContactFix';


function App() {
    return (

        <React.StrictMode>
            <React.Fragment>
                <Navbar />
                <OneBlock />
                <DataFix />
            </React.Fragment>
        </React.StrictMode>    
    );
}

export default App;