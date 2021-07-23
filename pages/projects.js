import { Container, CardColumns }  from 'react-bootstrap';

import NavPlus from '../components/navplus';
import PageHeader from '../components/pageheader';
import SingleCard from '../components/card'

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
					imageLink='/images/TwitchAbout_Website.png'
					linkLink="https://github.com/datasciencewithdaniel/datasciencewithdaniel"
					linkText="Check out the project on GitHub"
				></SingleCard>
				<SingleCard
					cardTitle="Beluga"
					cardText="A Python library to help make analysing machine learning metrics easier"
					imageLink='/images/TwitchAbout_Beluga.png'
					linkLink="https://github.com/datasciencewithdaniel/beluga"
					linkText="Check out the project on GitHub"
				></SingleCard>
			</CardColumns>

		</Container>

    </>)
}
  
export default Projects;
