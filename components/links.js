// import Link from 'next/link'
import GitHubIcon from "@material-ui/icons/GitHub";
// import YouTubeIcon from "@material-ui/icons/YouTube";
// import LinkedInIcon from "@material-ui/icons/LinkedIn";

const extLinks = [
    <a href="https://www.datasciencewithdaniel.com.au" target="_blank">
        <div><p><img 
            src="/icons/discord.svg"
            alt="Discord" 
            align="left"
            width="20"
            height="20"
            className="imageIcon"
        />/discord</p></div></a>,
    <a href="https://github.com/datasciencewithdaniel" target="_blank">
        <div><GitHubIcon className="imageIcon2" style={{ fontSize: 19 }}></GitHubIcon>/github</div></a>,
    <a href="https://www.youtube.com/channel/UCW8QDcOyAqGQ-Hab0PCOprw" target="_blank">
        <div><p><img 
            src="/icons/youtube.svg"
            alt="Discord" 
            align="left"
            width="20"
            height="20"
            className="imageIcon"
        />/youtube</p></div></a>,
    <a href="https://www.linkedin.com/company/71052475/" target="_blank">
        <div><p><img 
            src="/icons/linkedin.svg"
            alt="Discord" 
            align="left"
            width="20"
            height="20"
            className="imageIcon"
        />/linkedin</p></div></a>,
    <a href="https://www.twitch.tv/datasciencewithdaniel" target="_blank">
        <div><p><img 
            src="/icons/twitch.svg"
            alt="Discord" 
            align="left"
            width="20"
            height="20"
            className="imageIcon"
        />/twitch</p></div></a>,
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

        <div className="container flex flex-wrap w-10/12 border-t-2 justify-center my-5 mx-auto px-5 pt-3">
            {extLinks.map((link, i) => (
                <div key={i} className="hover:text-red-400 px-5">{link}</div>
            ))}
        </div>
  </>)
}

export default Links;