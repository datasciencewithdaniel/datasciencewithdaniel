import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import CompStyles from '../styles/Components.module.css'
 
const timeElapsed = Date.now();
const today = new Date(timeElapsed);
const buildTimestamp = today.toDateString()

const Footer = () => {

  	return (<>
		<Container fluid className={CompStyles.footerText}>
			<Row>
				<p>
					Latest build: {buildTimestamp}
				</p>
			</Row>
		</Container>
	</>)
}

export default Footer
