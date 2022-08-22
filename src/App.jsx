import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import DataFix from './components/VerticalBarFix';
import About from './components/About';


function App() {
    return (

        <React.StrictMode>
            <React.Fragment>
                <Navbar />
                <Home/>
                <DataFix />
                <About />
            </React.Fragment>
        </React.StrictMode>    
    );
}

export default App;