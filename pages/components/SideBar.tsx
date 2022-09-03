import { FunctionComponent } from 'react';
import Container from 'react-bootstrap/Container';
import styles from '../../styles/SideBar.module.scss';
import Tab from './Tab';


const SideBar: FunctionComponent = () => {
    return <Container>
        <Tab name="Home" />
        <Tab name="Bio" />
        <Tab name="Projects" />
        <Tab name="Contact" />
    </Container>
}

export default SideBar