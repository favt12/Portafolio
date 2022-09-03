import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import DataFix from './components/VerticalBarFix';
import About from './components/About';
import Projects from './components/Projects';
import Footer from './components/Footer';


function App() {
    return (

        <React.StrictMode>
            <React.Fragment>
                <Navbar />
                <Home/>
                <DataFix />
                <About />
                <Projects />
                <Footer />
            </React.Fragment>
        </React.StrictMode>    
    );
}

export default App;