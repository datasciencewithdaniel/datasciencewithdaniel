import Link from 'next/link'
import GitHubIcon from "@material-ui/icons/GitHub";
import YouTubeIcon from "@material-ui/icons/YouTube";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
// import FadeInSection from "./FadeInSection";

const extLinks = [
    <Link href="https://www.datasciencewithdaniel.com.au">
        <div><GitHubIcon style={{ fontSize: 19 }}></GitHubIcon>discord</div></Link>,
    <Link href="https://www.datasciencewithdaniel.com.au1">
        <div><GitHubIcon style={{ fontSize: 19 }}></GitHubIcon>github</div></Link>,
    <Link href="https://www.datasciencewithdaniel.com.au2">
        <div><YouTubeIcon style={{ fontSize: 19 }}></YouTubeIcon>youtube</div></Link>,
    <Link href="https://www.datasciencewithdaniel.com.au3">
        <div><LinkedInIcon style={{ fontSize: 19 }}></LinkedInIcon>linkedin</div></Link>,
    <Link href="https://www.datasciencewithdaniel.com.au4">
        <div><GitHubIcon style={{ fontSize: 19 }}></GitHubIcon>twitch</div></Link>
];

const Links = () => {
    return (<>
        <div className="rightLinks">
            {extLinks.map((link, i) => (
                //<FadeInSection delay={`${i + 1}00ms`}>
                    <div key={i} className="rightLinksText">{link}</div>
                //</FadeInSection>
            ))}
        </div>
  </>)
}

export default Links;