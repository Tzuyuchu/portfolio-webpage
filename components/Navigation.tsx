import { FunctionComponent } from 'react';
import styles from '../styles/SideBar.module.scss';
import { useWindowDimensions } from './functions';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';

const Navigation: FunctionComponent = () => {
    const { width, height } = useWindowDimensions();
    let res: JSX.Element;
    let expand = 'sm';
    let mode = 'dark';

    // Vertical Navigation Bar
    if (width > height) {
        res = (
            <Container>
                <h1>Width greater than height</h1>
            </Container>
        )
    } else { // Top Navigation Bar
        res = (<>
            <Navbar 
              fixed='top'
              key={expand}
              bg={mode} 
              expand={expand} 
              className="mb-1" 
              variant={mode}
            >
              <Container fluid>
                <Navbar.Brand href="#">ntn.nicholas</Navbar.Brand>
                <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
                <Navbar.Offcanvas
                  id={`offcanvasNavbar-expand-${expand}`}
                  aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                  placement="end"
                >
                  <Offcanvas.Header closeButton>
                    <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                      Offcanvas
                    </Offcanvas.Title>
                  </Offcanvas.Header>
                  <Offcanvas.Body>
                    <Nav className="justify-content-end flex-grow-1 pe-3">
                      <Nav.Link href="#action1">Home</Nav.Link>
                      <Nav.Link href="#action2">Bio</Nav.Link>
                      <Nav.Link href="#action2">Projects</Nav.Link>
                      <NavDropdown
                        title="Dropdown"
                        id={`offcanvasNavbarDropdown-expand-${expand}`}
                      >
                        <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action4">
                          Another action
                        </NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action5">
                          Something else here
                        </NavDropdown.Item>
                      </NavDropdown>
                    </Nav>
                  </Offcanvas.Body>
                </Navbar.Offcanvas>
              </Container>
            </Navbar>
        </>
      );
    }

    return res;
}

export default Navigation