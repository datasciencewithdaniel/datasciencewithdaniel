// import { Container } from 'react-bootstrap';

import Links from '../components/links';
import Navigation from '../components/navigation';
import Title from '../components/title';
import Value from '../components/value';
import Pillars from '../components/pillars/pillars';
import Projects from '../components/projects/projects';
import Contact from '../components/contact';


const Home = () => {
	
  	return (<>
        
		<Navigation/>
        <section id="title">
            <Title/>
            <Value/>
        </section>
        <section id="pillars">
            <Pillars/>
        </section>
        <section id="projects">
            <Projects/>
        </section>
        <section id="contact">
            <Contact/>
        </section>
        <Links/>
	</>)
}
 
export default Home;
