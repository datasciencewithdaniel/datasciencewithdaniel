import { Jumbotron } from 'react-bootstrap';

import CompStyles from '../styles/Components.module.css'
import Title from './title';

const Jumbo = () => {
    
  	return (<>
		<Jumbotron className={CompStyles.jumboText}>
            <Title/>
        </Jumbotron>
	</>)
}

export default Jumbo