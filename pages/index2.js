// import { Container } from 'react-bootstrap';

import Navigation from '../components/navigation';
import Title from '../components/title';
import Value from '../components/value';
import Pillars from '../components/pillars';
import About from '../components/about';
import Community from '../components/community';
import Contact from '../components/contact';

const Home = () => {
	
  	return (<>
		<Navigation/>
        <Title/>
        <Value/>
        <Pillars/>
        <About/>
        <Community/>
        <Contact/>
	</>)
}
 
export default Home;
