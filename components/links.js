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
        <div><YouTubeIcon style={{ fontSize: 21 }}></YouTubeIcon>/youtube</div></a>,
    <a href="https://www.linkedin.com/company/71052475/" target="_blank">
        <div><LinkedInIcon style={{ fontSize: 20 }}></LinkedInIcon>/linkedin</div></a>,
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

        <div className="container flex felx-wrap w-10/12 border-t-2 place-items-center my-5 mx-auto px-5">
            {extLinks.map((link, i) => (
                <div key={i} className="hover:text-red-400 pt-2 px-5">{link}</div>
            ))}
        </div>
  </>)
}

export default Links;