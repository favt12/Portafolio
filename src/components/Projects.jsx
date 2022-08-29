import { Container, Row, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Project0 from '../assets/projects0.png';
import Project1 from '../assets/projects1.webp';
import Project2 from '../assets/projects2.webp';

function ProjectsDev(params) {
    return (
        <section id='projects'>
            <Container className='text-center --projects'>
                <Row className='--project-title'>
                    <h2>Projects</h2>
                </Row>
                <Row className='--projects-runway'>
                    <Row className='--project-runway-content'>
                        <Row>
                            <img src={ Project0 }/>
                        </Row>
                        <Row className='--proyect-button py-2'>
                            <div>
                                <Button href='https://github.com/' target='_blank'  size="sm" variant="outline-light">Código</Button>
                            </div>
                            <div>
                                <Button href='https://github.com/' target='_blank'  size="sm" variant="outline-light">Demo</Button>
                            </div>
                        </Row>
                        <Row className='--project-data'>
                            <p>Cambits Perú</p>
                            <small>Laravel, React, MySQL</small>
                        </Row>
                    </Row>
                    <Row className='--project-runway-content'>
                        <Row>
                            <img src={ Project1 }/>
                        </Row>
                        <Row className='--proyect-button py-2'>
                            <div>
                                <Button href='https://github.com/' target='_blank'  size="sm" variant="outline-light">Código</Button>
                            </div>
                            <div>
                                <Button href='https://github.com/' target='_blank'  size="sm" variant="outline-light">Demo</Button>
                            </div>
                        </Row>
                        <Row className='--project-data'>
                            <p>ShoppingDay</p>
                            <small>Laravel, React, MySQL</small>
                        </Row>
                    </Row>
                    <Row className='--project-runway-content'>
                        <Row>
                            <img src={ Project2 }/>
                        </Row>
                        <Row className='--proyect-button py-2'>
                            <div>
                                <Button href='https://github.com/' target='_blank'  size="sm" variant="outline-light">Código</Button>
                            </div>
                            <div>
                                <Button href='https://github.com/' target='_blank'  size="sm" variant="outline-light">Demo</Button>
                            </div>
                        </Row>
                        <Row className='--project-data'>
                            <p>PayMee</p>
                            <small>Laravel, React, MySQL</small>
                        </Row>
                    </Row>
                </Row>
            </Container>
        </section>
    )
}

export default ProjectsDev;