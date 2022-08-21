import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import DataFix from './components/VerticalBarFix';


function App() {
    return (

        <React.StrictMode>
            <React.Fragment>
                <Navbar />
                <Home/>
                <DataFix />
            </React.Fragment>
        </React.StrictMode>    
    );
}

export default App;