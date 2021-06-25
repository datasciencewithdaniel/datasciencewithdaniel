import Jumbotron from 'react-bootstrap/Jumbotron';
// import Button from 'react-bootstrap/Button';

import CompStyles from '../styles/Components.module.css'
 
const Jumbo = () => {
  	return (<>
		<Jumbotron className={CompStyles.jumboText}>
            <h1>Data Science with Daniel</h1>
            <h4>Build. Share. Learn.</h4>
        </Jumbotron>
	</>)
}

export default Jumbo
