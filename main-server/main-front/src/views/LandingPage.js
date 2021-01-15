import LandingSection from '../widgets/landing_section.js';

import ProfilePic from '../assets/profilepic.png';

import {FaInstagram} from 'react-icons/fa';
import {FiTwitter, FiGithub} from 'react-icons/fi';


let sections = ["Projects", "Blog", "About"];

function LandingPage(){
    let elem = (
        <div className="w-screen h-screen main-bg-gradient">

            <div className="flex flex-row space-x-4 items-center float-right mr-3 mt-3">
                {sections.map(section=><LandingSection name={section} />)}
                <div className="flex flex-row text-lg text-white space-x-3 mr-4">
                    <FaInstagram />
                    <FiTwitter />
                    <FiGithub />
                </div>
            </div>

            <div className="text-white font-fira-code absolute left-32 top-1/2 transform -translate-y-3/4">
                <div className="flex flex-row items-center space-x-2"><img className="w-24 h-24 object-cover rounded-full" src={ProfilePic} /><div className="text-6xl">Hello There 👋</div></div>
                <div className="text-4xl mt-4">I’m Meth, a full stack web dev<br />Works remotely, currently in SL</div>
            </div>
        </div>
    );
    return elem;
}

export default LandingPage;