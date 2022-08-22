import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaGithub, FaLinkedin, FaAward, FaEnvelope, FaFileContract } from 'react-icons/fa';
import logo from '../assets/logo-alexisDev-azul.png';

function DataFix() {
    return(
        <aside className='bar-info text-center'>
            <div className='binfo-logo'>
                <img src={logo} />
            </div>
            <div className='binfo'>
                <div className='binfo-link'>
                    <a href='#'>
                        <FaGithub />
                        <p>Github</p>
                    </a>
                </div>
                <div className='binfo-link'>
                    <a href='#'>
                        <FaLinkedin/>
                        <p className='binfo-text'>Linkendin</p>
                    </a>
                </div>
                <div className='binfo-link'>
                    <a href='#'>
                        <FaEnvelope />
                        <p className='binfo-text'>Email</p>
                    </a>
                </div>
                <div className='binfo-link'>
                    <a href='#'>
                        <FaAward/>
                        <p className='binfo-text'>Medallas</p>
                    </a>
                </div>
                <div className='binfo-link'>
                    <a href='#'>
                        <FaFileContract />
                        <p className='binfo-text'>CV</p>
                    </a>
                </div>
            </div>
        </aside>
    )
    
}

export default DataFix;