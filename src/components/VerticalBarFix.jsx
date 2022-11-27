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
                    <a href='https://github.com/favt12?tab=repositories' target='_blank'>
                        <FaGithub />
                        <p>Github</p>
                    </a>
                </div>
                <div className='binfo-link'>
                    <a href='https://www.linkedin.com/in/alexis-vasquezt/'  target='_blank'>
                        <FaLinkedin/>
                        <p className='binfo-text'>Linkendin</p>
                    </a>
                </div>
                <div className='binfo-link'>
                    <a href='mailto:soporte@alexisvasquezdev.com'>
                        <FaEnvelope />
                        <p className='binfo-text'>Email</p>
                    </a>
                </div>
            </div>
        </aside>
    )
    
}

export default DataFix;