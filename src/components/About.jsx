import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import  Skills from './Skill-icons';


function About() {
    return (
        <section id='about'>
            <Container className="text-center --about">
                <Row className='--about-title'>
                        <h2>About Me</h2>
                </Row>
                <Row>
                    <h3>Profile</h3>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et sagittis netus molestie quis enim urna tristique vitae risus. Sed eu nunc suspendisse elementum. Nulla senectus tristique elementum sagittis enim. Non vel fringilla velit nisi, quis interdum neque blandit.
                    </p>
                </Row>
                <Row className='--about-skills'>
                    <h3>Skills</h3>
                        {
                            Skills && Skills.map((Skills) =>
                                <Col className='--about-skills-icons' xs={3} lg={2} key={ Skills.id }>
                                    <img
                                    src={ Skills.image }
                                    alt={ Skills.title }
                                        />
                                    <p>{ Skills.title }</p>    
                                </Col>  
                            )
                        }   
                </Row>
            </Container>
        </section>
    )
}

export default About;