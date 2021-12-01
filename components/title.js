// import {Typist} from "react-typist";
// import "react-typist/dist/Typist.css";
import FadeInSection from "./FadeInSection";
const Title = () => {
    return(
        // <Typist avgTypingDelay={120}>
            <div className="container titleSection">
                    <div className="title text-center m-20">Data Science with Daniel</div>
                    <FadeInSection>
                    <div className="italic text-3xl text-center">Build. Share. Learn.</div>
                    <img 
                        src="/images/White_Logo2.png"
                        alt="Logo" 
                        className="center"
                    />
                    </FadeInSection>

            </div>
    //   </Typist>
    )
}
export default Title