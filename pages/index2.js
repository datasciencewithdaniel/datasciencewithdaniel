// import { Container } from 'react-bootstrap';

import Links from '../components/links';
import Navigation from '../components/navigation';
import Title from '../components/title';
import Value from '../components/value';
// import Pillars from '../components/pillars';
import Contact from '../components/contact';


const Home = () => {
	
  	return (<>
        <Links/>
		<Navigation/>
        <section id="title">
            <Title/>
        </section>
        <section id="value">
            <Value/>
        </section>
        <section id="pillars">
            {/* <Pillars/> */}
        </section>
        <section id="contact">
            <Contact/>
        </section>
	</>)
}
 
export default Home;
