import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import CompStyles from '../styles/Components.module.css'
 


const PageHeader = (props) => {

  	return (<>
		<Container>
            <h1 className={CompStyles.mainTitle}>
				{props.pageTitle}
            </h1>
		</Container>
	</>)
}

export default PageHeader