import { Container, Row, Col, Tabs, Tab } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Typewriter from "typewriter-effect";


function OneBlock() {
  return (
    <section className='OneBlock'>
        <Container>
            <Row className='py-5'>
                <Tabs justify variant='pills' defaultActiveKey='tab-1'>
                    <Tab eventKey='tab-1' title='.js'>
                        <Row className='py-5 px-2'>
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
                <div className='typewr'>
                    <div className='cons-text'>
                        <small>Console</small>
                    </div>
                    <Typewriter
                
                    onInit={(typewriter)=> {
                
                    typewriter
                        
                    .typeString('My name is Alexis Vásquez and I am a Web Developer')   
                    .pauseFor(800)
                    .start();
                    }}
                    />
                </div>
            </Row>       
                    </Tab>
                    <Tab eventKey='tab-2' title='.php'>
                        dd  
                    </Tab>
                    <Tab eventKey='tab-3' title='.py'>
                        Hola mundo 3
                    </Tab>
                    <Tab eventKey='tab-4' title='.java'>
                        Hola mundo 4
                    </Tab>
                </Tabs>
            </Row>
        </Container>
    </section>
  );
}

export default OneBlock;