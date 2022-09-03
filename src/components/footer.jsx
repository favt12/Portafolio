import { Container, Row } from 'react-bootstrap';
function FooterDev() {
    return (
        <footer>
            <Container className='--footer'>
                <Row className='--footer-content text-center'>
                   <p>Developed by Alexis Vásquez <small className='heart'>&#x2665;</small> ©2022</p>
                </Row>
            </Container>
        </footer>
    )   
}

export default FooterDev;