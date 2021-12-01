// import {Typist} from "react-typist";
// import "react-typist/dist/Typist.css";
import FadeInSection from "./FadeInSection";
const Title = () => {
    return(
        // <Typist avgTypingDelay={120}>
            <div className="container section">
                    <div class="title text-center m-20">Data Science with Daniel</div>
                    <FadeInSection>
                    <div class="italic text-3xl text-center">Build. Share. Learn.</div>
                    <img 
                        src="/images/White_Logo2.png"
                        alt="Logo" 
                        class="center"
                    />
                    </FadeInSection>

            </div>
    //   </Typist>
    )
}
export default Title