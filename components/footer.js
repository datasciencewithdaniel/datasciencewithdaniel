import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import CompStyles from '../styles/Components.module.css'
 
const timeElapsed = Date.now();
const today = new Date(timeElapsed);
const buildTimestamp = today.toDateString()

const Footer = () => {

  	return (<>
		<Container fluid className={CompStyles.footerText}>
			<Container>
			<Row>
				Latest build: {buildTimestamp}
			</Row>
			</Container>
		</Container>
	</>)
}

export default Footer
