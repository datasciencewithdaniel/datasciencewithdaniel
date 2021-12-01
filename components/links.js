// import Link from 'next/link'
import GitHubIcon from "@material-ui/icons/GitHub";
import YouTubeIcon from "@material-ui/icons/YouTube";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

const extLinks = [
    <a href="https://www.datasciencewithdaniel.com.au" target="_blank">
        <div><GitHubIcon style={{ fontSize: 19 }}></GitHubIcon>/discord</div></a>,
    <a href="https://github.com/datasciencewithdaniel" target="_blank">
        <div><GitHubIcon style={{ fontSize: 19 }}></GitHubIcon>/github</div></a>,
    <a href="https://www.youtube.com/channel/UCW8QDcOyAqGQ-Hab0PCOprw" target="_blank">
        <div><YouTubeIcon style={{ fontSize: 19 }}></YouTubeIcon>/youtube</div></a>,
    <a href="https://www.linkedin.com/company/71052475/" target="_blank">
        <div><LinkedInIcon style={{ fontSize: 19 }}></LinkedInIcon>/linkedin</div></a>,
    <a href="https://www.twitch.tv/datasciencewithdaniel" target="_blank">
        <div><GitHubIcon style={{ fontSize: 19 }}></GitHubIcon>/twitch</div></a>
];

const Links = () => {
    return (<>
        <div className="rightLinks">
            <div className="visible md:invisible">
                {extLinks.map((link, i) => (
                    <div key={i} className="hover:text-red-400">{link}</div>
                ))}
            </div>
        </div>
  </>)
}

export default Links;