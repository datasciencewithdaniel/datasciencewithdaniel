import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import React from 'react';
import CompStyles from '../styles/Components.module.css'
 
const timeElapsed = Date.now();
const today = new Date(timeElapsed);
const buildTimestamp = today.toDateString()

const Footer = () => {

  	return (<>
		<Container fluid className={CompStyles.footerText}>
			<Container>
				<Row className={CompStyles.footerTextRow}>
					<p className={CompStyles.footerTextLeft}>Latest site build: {buildTimestamp}</p>
				</Row>
			</Container>
		</Container>
	</>)
}

export default Footer
