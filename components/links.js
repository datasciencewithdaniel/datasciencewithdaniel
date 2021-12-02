// import { isMobile }  from 'react-device-detect';

import GitHubIcon from "@material-ui/icons/GitHub";
import EmailIcon from "@material-ui/icons/Email";
// import LinkedInIcon from "@material-ui/icons/LinkedIn";

const extLinks = [
    <a href="https://www.datasciencewithdaniel.com.au" target="_blank">
        <div><p className="rightLinksText"><img 
            src="/icons/discord.svg"
            alt="Discord" 
            align="left"
            width="20"
            height="20"
            className="imageIcon"
        />/ discord</p></div></a>,
    <a href="https://github.com/datasciencewithdaniel" target="_blank">
        <div><p className="rightLinksText">
            <GitHubIcon className="imageIcon2" style={{ fontSize: 19 }}></GitHubIcon>
        / github</p></div></a>,
    <a href="https://www.youtube.com/channel/UCW8QDcOyAqGQ-Hab0PCOprw" target="_blank">
        <div><p className="rightLinksText"><img 
            src="/icons/youtube.svg"
            alt="Discord" 
            align="left"
            width="20"
            height="20"
            className="imageIcon"
        />/ youtube</p></div></a>,
    <a href="https://www.linkedin.com/company/71052475/" target="_blank">
        <div><p className="rightLinksText"><img 
            src="/icons/linkedin.svg"
            alt="Discord" 
            align="left"
            width="20"
            height="20"
            className="imageIcon"
        />/ linkedin</p></div></a>,
    <a href="https://www.twitch.tv/datasciencewithdaniel" target="_blank">
        <div><p className="rightLinksText"><img 
            src="/icons/twitch.svg"
            alt="Discord" 
            align="left"
            width="20"
            height="20"
            className="imageIcon"
        />/ twitch</p></div></a>,
    <a href="mailto:contact@datasciencewithdaniel.com.au" target="_blank">
        <div><p className="rightLinksText">
            <EmailIcon className="imageIcon2" style={{ fontSize: 21 }}></EmailIcon>
        / email</p></div></a>,
];

const Links = () => {
    return (<>
        <div className="rightLinks">
            <div className="visible">
                {extLinks.map((link, i) => (
                    <div key={i} className="hover:text-red-400">{link}</div>
                ))}
            </div>
        </div>

        <div className="container flex flex-wrap w-10/12 border-t-2 border-gray-700 justify-center my-5 mx-auto px-5 pt-3">
            {extLinks.map((link, i) => (
                <div key={i} className="px-4">{link}</div>
            ))}
        </div>
  </>)
}

export default Links;