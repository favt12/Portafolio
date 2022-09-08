import { Container, Row, Col, Tabs, Tab } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Typewriter from "typewriter-effect";


function Home() {
  return (
    <section className='OneBlock container'>
            <Row className='py-5'>
                <Tabs variant='pills' defaultActiveKey='tab-1'>
                    <Tab eventKey='tab-1' title='.js'>
                        <Row className='px-2 --padding-tb'>
                            <Col xs={1}>
                                    <p className='text-center color-gray idioms-text-formt'>1</p>
                            </Col>
                            <Col xs={11}>
                                    <p className='idioms-text-formt padd-l'><b className='color-lblue'>document.</b><b className='color-coral'>write</b><b className='color-mustard'>(</b><b className='color-ocher'> 'My name is Alexis Vásquez</b></p>
                            </Col>
                            <Col xs={1}>
                                    <p className='text-center color-gray margTop idioms-text-formt'>2</p>
                            </Col>
                            <Col xs={11}>
                                    <p className='idioms-text-formt margTop padd-l'><b className='color-ocher'>and I am a Web Developer' </b><b className='color-mustard'>)</b>;</p>
                            </Col>
                        </Row>
                        <Row>
                            <Col className='typewr'>
                                <div className='console-text'>
                                    <small>Console</small>
                                </div>
                                <div className='--padding-tb'>
                                    <Typewriter
                                
                                    onInit={(typewriter)=> {
                                
                                    typewriter
                                        
                                    .typeString('My name is Alexis Vásquez and I am a Web Developer')   
                                    .pauseFor(800)
                                    .start();
                                    }}
                                    />
                                </div>
                            </Col>
                        </Row>       
                    </Tab>
                    <Tab eventKey='tab-2' title={'.php'}>
                        dd  
                    </Tab>
                    <Tab eventKey='tab-3' title='.py'>
                        Hola mundo 3
                    </Tab>
                </Tabs>
            </Row>
    </section>
  );
}

export default Home;