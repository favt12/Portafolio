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
                <div>
                    <a href='#'>
                        <FaGithub />
                        <p className='binfo-text'>Github</p>
                    </a>
                </div>
                <div>
                    <a href='#'>
                        <FaLinkedin/>
                        <p className='binfo-text'>Linkendin</p>
                    </a>
                </div>
                <div>
                    <a href='#'>
                        <FaEnvelope />
                        <p className='binfo-text'>Email</p>
                    </a>
                </div>
                <div>
                    <a href='#'>
                        <FaAward/>
                        <p className='binfo-text'>Medallas</p>
                    </a>
                </div>
                <div>
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