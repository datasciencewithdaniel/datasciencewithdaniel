
import Container from 'react-bootstrap/Container';

import Navigation from '../components/navigation';
import Jumbotron from '../components/jumbotron';

import CompStyles from '../styles/Components.module.css'

const NavPlus = () => {
    return (<>
        <Container fluid className={CompStyles.NavPlusBackground}>
            <Navigation></Navigation>
            <Jumbotron></Jumbotron>
        </Container>
  </>)
}

export default NavPlus;

