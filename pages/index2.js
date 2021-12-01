// import { Container } from 'react-bootstrap';

import Links from '../components/links';
import Navigation from '../components/navigation';
import Title from '../components/title';
import Value from '../components/value';
import Projects from '../components/projects/Projects';
import Pillars from '../components/pillars/Pillars';
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
