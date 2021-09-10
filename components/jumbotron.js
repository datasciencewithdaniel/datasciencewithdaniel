import { Jumbotron } from 'react-bootstrap';

import CompStyles from '../styles/Components.module.css'

const Jumbo = () => {
    
  	return (<>
		<Jumbotron className={CompStyles.jumboText}>
            <h1>Data Science with Daniel</h1>
            <h4>Build. Share. Learn.</h4>
            <img 
                src="/images/White_Logo2.png"
                alt="Logo" 
                width="100"
                height="100"
            />
        </Jumbotron>
	</>)
}

export default Jumbo