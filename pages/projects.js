import { Container}  from 'react-bootstrap';
import { CardColumns } from 'react-bootstrap';
import { Card } from 'react-bootstrap';

import NavPlus from '../components/navplus';
import PageHeader from '../components/pageheader';
import Footer from '../components/footer';
import SingleCard from '../components/card'

import styles from '../styles/Home.module.css'

const Projects = () => {
    return (<>
		<NavPlus></NavPlus>

        <PageHeader pageTitle="Projects">
        </PageHeader>

		<Container>

			<CardColumns>
				<SingleCard
					cardTitle="datasciencewithdaniel.com.au"
					cardText="This is the new card text"
					imageLink='https://datasciencewithdaniel.com.au/images/MegaGeniusBar.png'
					linkLink="#"
					linkText="???"
				></SingleCard>
				<SingleCard
					cardTitle="Beluga"
					cardText="This is the new card text"
					imageLink='https://datasciencewithdaniel.com.au/images/MegaGeniusBar.png'
					linkLink="#"
					linkText="???"
				></SingleCard>
			</CardColumns>

		</Container>

        <Footer></Footer>
    </>)
}
  
export default Projects;