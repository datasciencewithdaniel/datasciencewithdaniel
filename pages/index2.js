// import { Container } from 'react-bootstrap';

import Navigation from '../components/navigation';
import Title from '../components/title';
import Value from '../components/value';
// import Pillars from '../components/pillars';
import Contact from '../components/contact';


const Home = () => {
	
  	return (<>
		<Navigation/>
        <Title/>
        <section>
            <Value/>
        </section>
        {/* <Pillars/> */}
        <Contact/>
	</>)
}
 
export default Home;
