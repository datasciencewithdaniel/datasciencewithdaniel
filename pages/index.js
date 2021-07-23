import Image from 'next/image'

import { Container } from 'react-bootstrap';

import NavPlus from '../components/navplus';
import PageHeader from '../components/pageheader';

import GeniusBar from '../assets/GeniusBar.png'
 
const Home = () => {
	
  	return (<>
		<NavPlus></NavPlus>

		<PageHeader pageTitle="Data Science with Daniel">
        </PageHeader>

		<Container>
			<Image 
				src={GeniusBar}
				alt="Genius Bar" 
				/>
		</Container>

	</>)
}
 
export default Home;
