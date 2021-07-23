import Image from 'next/image'

import { Jumbotron } from 'react-bootstrap';

import CompStyles from '../styles/Components.module.css'

import WhiteLogo from '../assets/White_Logo2.png'
 
const Jumbo = () => {
    
  	return (<>
		<Jumbotron className={CompStyles.jumboText}>
            <h1>Data Science with Daniel</h1>
            <h4>Build. Share. Learn.</h4>
            <Image 
                src={WhiteLogo} 
                alt="White Logo" 
                width={100}
                height={100}
            />
        </Jumbotron>
	</>)
}

export default Jumbo