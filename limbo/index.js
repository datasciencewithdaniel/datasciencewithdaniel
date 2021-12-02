import { Container } from 'react-bootstrap';

import NavPlus from '../components/navplus';
import PageHeader from '../components/pageheader';

const Home = () => {
	
  	return (<>
		<NavPlus/>

		<PageHeader pageTitle="Data Science with Daniel"/>

		<Container>
			<img 
				src="/images/GeniusBarS2.png"
				alt="Genius Bar" 
				width="100%"
				height="100%"
				/>
		</Container>

	</>)
}
 
export default Home;
