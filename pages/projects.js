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
					cardText="The Data Science with Daniel website built using React and Next.js"
					imageLink='https://datasciencewithdaniel.com.au/images/MegaGeniusBar.png'
					linkLink="https://github.com/datasciencewithdaniel/datasciencewithdaniel"
					linkText="Check out the project on GitHub"
				></SingleCard>
				<SingleCard
					cardTitle="Beluga"
					cardText="A Python library to help make analysing machine learning metrics easier"
					imageLink='https://datasciencewithdaniel.com.au/images/MegaGeniusBar.png'
					linkLink="https://github.com/datasciencewithdaniel/beluga"
					linkText="Check out the project on GitHub"
				></SingleCard>
			</CardColumns>

		</Container>

        <Footer></Footer>
    </>)
}
  
export default Projects;