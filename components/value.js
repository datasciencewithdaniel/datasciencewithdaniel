import { Container, Row, Col } from 'react-bootstrap';



const Value = (props) => {

  	return (<>
		<Container>
           <Row>
			   <Col className={styles.aboutText}>We seek to build a community of Data Scientists, so that we can share our passion and 
			   learn together. <br></br>We do this by bringing everything and everyone together in one place;
			   Data Science with Daniel.
			   </Col>
		   </Row>
		</Container>
	</>)
}

export default Value
