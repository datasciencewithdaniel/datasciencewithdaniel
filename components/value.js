import { Container, Row } from 'react-bootstrap';

import CompStyles from '../styles/Components.module.css'

const Value = (props) => {

  	return (<>
		<Container>
           <Row>
			   <Col className={styles.valueText}>
			   We seek to build a community of Data Scientists, so that we can share our passion and 
			   learn together. We do this by bringing everything and everyone together in one place;
			   Data Science with Daniel.
			   </Col>
		   </Row>
		</Container>
	</>)
}

export default Value
