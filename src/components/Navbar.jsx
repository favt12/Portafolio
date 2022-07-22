import { useRef } from 'react';
import { FaEllipsisV,FaTimes } from 'react-icons/fa';
import logo from '../assets/logo-alexisDev-azul.png';


function Navbar() {
    const navRef = useRef();
    const showNavbar = () => {
        navRef.current.classList.toggle('responsive_nav');
    }
    return (
        <header>
            <div><img src={logo} alt='img'></img></div>
            <nav ref={navRef}>
                <a href="/#">Home</a>
                <a href="/#">About Me</a>
                <a href="/#">Projets</a>
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