import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaGithub, FaLinkedin, FaAward, FaEnvelope, FaFileContract } from 'react-icons/fa';

function DataFix() {
    return(
        <aside className='bar-info'>
            <div className='binfo'>
                <div>
                    <FaGithub />
                </div>
                <div>
                    <FaLinkedin/>
                </div>
                <div>
                    <FaEnvelope />
                </div>
                <div>
                    <FaAward/>
                </div>
                <div>
                    <FaFileContract />
                </div>
            </div>
        </aside>
    )
    
}

export default DataFix;