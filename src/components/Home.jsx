import { Container, Row, Col, Tabs, Tab } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';
import Typewriter from "typewriter-effect";
import JsIconTab from '../assets/js_tabs.png';
import HtmlIconTab from '../assets/html_tab.png';
import PhpIconTab from '../assets/php_tabs.png';

function TypewriterEffect({ text, pauseDuration }) {
        return (
          <Typewriter
            onInit={(typewriter) => {
              typewriter.typeString(text).pauseFor(pauseDuration).start();
            }}
          />
        );
      }

function Home() {
  return (
    <section className='OneBlock container'>
            <Row className='py-5'>
                <Tabs variant='pills' defaultActiveKey='tab-1'>
                    <Tab eventKey='tab-1' title={<span><img src={JsIconTab} /> App.js</span>}>
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
                            <Col xs={1}>
                                    <p className='text-center color-gray margTop idioms-text-formt'>3</p>
                            </Col>
                            <Col xs={11}>
                                    <p></p>
                            </Col>
                        </Row>
                        <Row>
                            <Col className='typewr'>
                                <div className='console-text'>
                                    <small>Console</small>
                                </div>
                                <div className='--padding-tb'>
                                        <TypewriterEffect text="My name is Alexis Vásquez and I am a Web Developer" pauseDuration={800} />
                                </div>
                            </Col>
                        </Row>       
                    </Tab>
                    <Tab eventKey='tab-2' title={<span><img src={PhpIconTab} /> Adm.php </span>}>
                        <Row className='px-2 --padding-tb'>
                            <Col xs={1}>
                                    <p className='text-center color-gray idioms-text-formt'>1</p>
                            </Col>
                            <Col xs={11}>
                                    <p className='idioms-text-formt padd-l'><b className='color-lblue'>{'<'}?php</b></p>
                            </Col>
                            <Col xs={1}>
                                    <p className='text-center color-gray margTop idioms-text-formt'>2</p>
                            </Col>
                            <Col xs={11}>
                                    <p className='idioms-text-formt margTop padd-l'><b className='color-mustard'>echo </b><b className='color-ocher'> 'I love technology'</b>;</p>
                            </Col>
                            <Col xs={1}>
                                    <p className='text-center color-gray margTop idioms-text-formt'>3</p>
                            </Col>
                            <Col xs={11}>
                                    <p></p>
                            </Col>
                        </Row>
                        <Row>
                            <Col className='typewr'>
                                <div className='console-text'>
                                    <small>Console</small>
                                </div>
                                <div className='--padding-tb'>
                                        <TypewriterEffect text="I love technology" pauseDuration={800} />
                                </div>
                            </Col>
                        </Row>    
                    </Tab>
                    <Tab eventKey='tab-3' title={<span className='name_tab'><img src={HtmlIconTab} /> index.html </span>}>
                    <Row className='px-2 --padding-tb'>
                            <Col xs={1}>
                                    <p className='text-center color-gray idioms-text-formt'>1</p>
                            </Col>
                            <Col xs={11}>
                                    <p className='idioms-text-formt padd-l'><b className='color-lblue'>{'<h1>'}</b><b>And I am passionate about what I do</b><b className='color-lblue'>{'</h1>'}</b></p>
                            </Col>
                            <Col xs={1}>
                                    <p className='text-center color-gray margTop idioms-text-formt'>2</p>
                            </Col>
                            <Col xs={11}>
                                    <p></p>
                            </Col>
                            <Col xs={1}>
                                    <p className='text-center color-gray margTop idioms-text-formt'>3</p>
                            </Col>
                            <Col xs={11}>
                                    <p></p>
                            </Col>
                        </Row>
                        <Row>
                            <Col className='typewr'>
                                <div className='console-text'>
                                    <small>Console</small>
                                </div>
                                <div className='--padding-tb'>
                                        <TypewriterEffect text="And I am passionate about what I do" pauseDuration={800} />
                                </div>
                            </Col>
                        </Row>  
                    </Tab>
                </Tabs>
            </Row>
    </section>
  );
}

export default Home;