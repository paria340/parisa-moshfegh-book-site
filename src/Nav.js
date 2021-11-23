import { SiLinkedin } from "react-icons/si";
import { SiGoodreads } from "react-icons/si";
import { MdPersonSearch } from "react-icons/md";
import { SiTwitter } from "react-icons/si";
import { SiInstagram } from "react-icons/si";


function Nav() {
    return(
        <ul className="navBar">
            <li><a href="https://www.linkedin.com/in/parisa-moshfegh/"><SiLinkedin /></a></li>
            <li><a href="https://www.goodreads.com/"><SiGoodreads /></a></li>
            <li><a href="https://parisathestoic.ca/"><MdPersonSearch /></a></li>
            <li><a href="https://twitter.com/paria340"><SiTwitter /></a></li>
            <li><a href="https://www.instagram.com/goodreads/"><SiInstagram /></a></li>
        </ul>
    )
}

export default Nav;