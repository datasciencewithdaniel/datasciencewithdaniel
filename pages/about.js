import React from 'react';

import { Container, Row, Col, CardColumns}  from 'react-bootstrap';

import NavPlus from '../components/navplus';
import PageHeader from '../components/pageheader';
import SingleCard from '../components/card'

import styles from '../styles/Home.module.css'

const About = () => {

    return (<>
		<NavPlus></NavPlus>

        <PageHeader pageTitle="About">
        </PageHeader>

		<Container>
			<Row>
				<Col className={styles.aboutText}>We seek to build a community of Data Scientists, so that we can share our passion and learn together. We do this by bringing everything and everyone together in one place; Data Science with Daniel.</Col>
			</Row>
			<Row>
				<Col className={styles.aboutText}><b>STUDENTS</b><br></br>We support anyone on their Data Science journey by providing an environment where they can ask questions, find answers and connect with others.</Col>
				<Col className={styles.aboutText}><b>INDUSTRY</b><br></br>We engage with industry to understand the Data Science landscape and ensure that the next generation of Data Scientists develop the skills to succeed in their career.</Col>
				<Col className={styles.aboutText}><b>ACADEMICS</b><br></br>We promote studying Data Science to bring new people into the field and provide feedback to improve these studies.</Col>
			</Row>
		</Container>

		<Container>

			<CardColumns>
				<SingleCard
					cardTitle="About"
					cardText="Learn about the Data Science with Daniel community"
					imageLink='/images/TwitchAbout_About.png'
					linkLink="/about.html"
					linkText="Click to enter infinite loop"
				></SingleCard>
				<SingleCard
					cardTitle="Projects"
					cardText="Help develop open source projects for any skill level"
					imageLink='images/TwitchAbout_Projects.png'
					linkLink="/projects.html"
					linkText="Find our projects on GitHub"
				></SingleCard>
				<SingleCard
					cardTitle="Community"
					cardText="Join the community on Discord for project updates and notifications"
					imageLink='/images/TwitchAbout_Community.png'
					linkLink="https://discord.gg/MWJyHSagg2"
					linkText="Join us on Discord"
				></SingleCard>
				<SingleCard
					cardTitle="Contribute"
					cardText="Be part of helping the community grow and offer more events"
					imageLink='/images/TwitchAbout_Contribute.png'
					linkLink="https://streamelements.com/datasciencewithdaniel/tip"
					linkText="Support the community"
				></SingleCard>
				<SingleCard
					cardTitle="Streaming"
					cardText="Watch us on Twitch and see our past streams"
					imageLink='/images/TwitchAbout_Streaming.png'
					linkLink="/streaming.html"
					linkText="Check out our latest streams"
				></SingleCard>
				<SingleCard
					cardTitle="Contact"
					cardText="Get in touch if you have something specific to discuss"
					imageLink='/images/TwitchAbout_Contact.png'
					linkLink="mailto:contact@datasciencewithdaniel.com.au"
					linkText="Get in touch"
				></SingleCard>
			</CardColumns>

		</Container>

    </>)
}
  
export default About;
