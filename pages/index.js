// import { Container } from 'react-bootstrap';
import PageHeader from '../components/pageHead'
// import SectionHeader from '../components/sectionHeader'
import Navigation from '../components/navigation';
import Title from '../components/title';
import Value from '../components/value';
import Projects from '../components/projects/Projects';
import Pillars from '../components/pillars/Pillars';
import Contact from '../components/contact';
import Links from '../components/links';


const Home = () => {
	
  	return (<>
        <PageHeader title="Home" description="The website for the Data Science with Daniel community"></PageHeader>
        
		<Navigation/>
        <section className="sectionBreaks" id="title">
            <Title/>
            <Value/>
        </section>
        <section className="sectionBreaks" id="pillars">
            <Pillars/>
        </section>
        <section className="sectionBreaks" id="projects">
            <Projects/>
        </section>
        {/* <section className="sectionBreaks" id="contact">
            <Contact/>
        </section> */}
        <Links/>
	</>)
}
 
export default Home;
