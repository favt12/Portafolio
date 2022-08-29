import { useRef } from 'react';
import { FaEllipsisV,FaTimes } from 'react-icons/fa';
import { Container, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../assets/logo-alexisDev-azul.png';


function Navbar() {
    const navRef = useRef();
    const showNavbar = () => {
        navRef.current.classList.toggle('responsive_nav');
    }
    return (
            <header className='container'>
                <div className='--Navbar-logo'>
                    <img src={logo} alt='img'/>
                </div>
                <nav ref={navRef}>
                    <a href="/#">Home</a>
                    <a href="/#about">About Me</a>
                    <a href="/#projects">Projects</a>
                    <a href="/#">Contact</a>
                    <button className='nav-btn nav-close-btn' onClick={showNavbar}>
                        <FaTimes/>
                    </button>
                </nav>
                <button className='nav-btn' onClick={showNavbar}>
                    <FaEllipsisV/>
                </button>
            </header>
    )
}

export default Navbar;