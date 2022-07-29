import { Container, Row, Col, Tabs, Tab } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


function OneBlock() {
  return (
    <section className='OneBlock'>
        <Container>
            <Row className='py-5'>
                <Tabs justify variant='pills' defaultActiveKey='tab-1'>
                    <Tab eventKey='tab-1' title='.js'>
                        <Row className='py-5 px-2'>
                            <Col xs={1}>
                                    <p className='text-center color-gris'>1</p>
                            </Col>
                            <Col xs={11}>
                                    <p className='idioms-text-formt'><i className='color-cele'>document.</i><i className='color-ros'>write</i><i className='color-mozt'> ( </i><i className='color-ocr'>'My name is</i></p>
                            </Col>
                            <Col xs={1}>
                                    <p className='text-center color-gris margTop'>2</p>
                            </Col>
                            <Col xs={11}>
                                    <p className='idioms-text-formt margTop'><i className='color-ocr'>AlexisDev and I am a web developer'</i><i className='color-mozt'> ) </i>;</p>
                            </Col>
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