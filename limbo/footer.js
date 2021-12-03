import React from 'react';

import { Container, Row } from 'react-bootstrap';

import CompStyles from '../styles/Components.module.css'
 
const timeElapsed = Date.now();
const today = new Date(timeElapsed);
const buildTimestamp = today.toDateString()

export const Footer = () => {

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
