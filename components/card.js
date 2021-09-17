import { Card } from 'react-bootstrap';

const SingleCard = (props) => {
	return (<>
		<Card style={{ width: '18rem' }}>
			<Card.Img variant="top" src={props.imageLink} />
			<Card.Body>
				<Card.Title>{props.cardTitle}</Card.Title>
				<Card.Text>
					{props.cardText}
				</Card.Text>
			</Card.Body>
			<Card.Footer>
				<small className="text-muted"><Card.Link href={props.linkLink} target="_blank" download={props.download? props.linkLink:null}>{props.linkText}</Card.Link></small>
			</Card.Footer>
		</Card>
	</>)
}

export default SingleCard