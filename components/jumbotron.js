import Jumbotron from 'react-bootstrap/Jumbotron';
import Image from 'next/image'
import WhiteLogo from '../assets/White_Logo.PNG'

import CompStyles from '../styles/Components.module.css'
 
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
