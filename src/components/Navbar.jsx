import { FaBars,FaTimes} from 'react-icons/fa';

function Navbar() {
    return (
        <header>
            <div>Logo</div>
            <nav>
                <a href="/#">Home</a>
                <a href="/#">About Me</a>
                <a href="/#">Projets</a>
                <a href="/#">contact</a>
                <button>
                    <FaTimes/>
                </button>
            </nav>
            <button>
                    <FaBars/>
                </button>
        </header>
    );
}

export default Navbar;