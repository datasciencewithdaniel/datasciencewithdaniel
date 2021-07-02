import { Container}  from 'react-bootstrap';
import { CardColumns } from 'react-bootstrap';
import { Card } from 'react-bootstrap';

import NavPlus from '../components/navplus';
import PageHeader from '../components/pageheader';
import Footer from '../components/footer';
import SingleCard from '../components/card'

import styles from '../styles/Home.module.css'

const About = () => {
    return (<>
		<NavPlus></NavPlus>

        <PageHeader pageTitle="About">
        </PageHeader>

		<Container>

			<CardColumns>
				<SingleCard
					cardTitle="About"
					cardText="This is the new card text"
					imageLink='https://datasciencewithdaniel.com.au/images/MegaGeniusBar.png'
					linkLink="#"
					linkText="???"
				></SingleCard>
				<SingleCard
					cardTitle="Community"
					cardText="This is the new card text"
					imageLink='https://datasciencewithdaniel.com.au/images/MegaGeniusBar.png'
					linkLink="#"
					linkText="???"
				></SingleCard>
				<SingleCard
					cardTitle="Streaming"
					cardText="This is the new card text"
					imageLink='https://datasciencewithdaniel.com.au/images/MegaGeniusBar.png'
					linkLink="#"
					linkText="???"
				></SingleCard>
			</CardColumns>

			<CardColumns>
				<SingleCard
					cardTitle="Projects"
					cardText="This is the new card text"
					imageLink='https://datasciencewithdaniel.com.au/images/MegaGeniusBar.png'
					linkLink="#"
					linkText="???"
				></SingleCard>
				<SingleCard
					cardTitle="Contribute"
					cardText="This is the new card text"
					imageLink='https://datasciencewithdaniel.com.au/images/MegaGeniusBar.png'
					linkLink="#"
					linkText="???"
				></SingleCard>
				<SingleCard
					cardTitle="Contact"
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
  
export default About;
