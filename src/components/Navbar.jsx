import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function HeaderInfo() {
    return (
        <Navbar bg="info" variant='dark' expand="lg">
            <Container>
                <Navbar.Brand href="/" >🍕 <strong>Pizzería Mamma Mia!</strong></Navbar.Brand>
                <Nav className="ms-auto">
                    <Nav.Link href="/carrito" className='rounded text-black-50 bg-light p-2'>🛒 $0</Nav.Link>
                </Nav>
              
            </Container>
            
        </Navbar>
        
    );
}

export default HeaderInfo;