import { Container, Row, Col, Form } from 'react-bootstrap';

const TutorExperience = (props) => {

  	return (<>
        <Container>
            <fieldset>
                <Form.Group as={Row} className="mb-3">
                <Col sm={10}>
                    <Form.Check
                        inline type="radio"
                        label="Beginner"
                        value="Beginner"
                        name={props.language.concat("Exp")}
                        id={props.language.concat("Exp")}
                        onChange={props.onChange}
                        
                    />
                    <Form.Check
                        inline type="radio"
                        label="Intermediate"
                        value="Intermediate"
                        name={props.language.concat("Exp")}
                        id={props.language.concat("Exp")}
                        onChange={props.onChange}
                    />
                    <Form.Check
                        inline type="radio"
                        label="Advanced"
                        value="Advanced"
                        name={props.language.concat("Exp")}
                        id={props.language.concat("Exp")}
                        onChange={props.onChange}
                    />
                </Col>
                </Form.Group>
            </fieldset>
        </Container>
	</>)
}

export default TutorExperience