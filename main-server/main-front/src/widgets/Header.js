import LandingSection from '../widgets/landing_section.js';

import {FaInstagram} from 'react-icons/fa';
import {FiTwitter, FiGithub} from 'react-icons/fi';

let sections = ["Projects", "Blog", "About"];

function Header() {
  let elem = (
    <div className="relative flex flex-row space-x-4 items-center float-right mr-3 mt-3">
      {sections.map(section => <LandingSection name={section} />)}
      <div className="flex flex-row text-lg text-white space-x-3 mr-4">
        <FaInstagram className="cursor-pointer" onClick={() => window.location.href = "https://www.instagram.com/muffledmitosis/"} />
        <FiTwitter className="cursor-pointer" />
        <FiGithub className="cursor-pointer" onClick={() => window.location.href = "https://github.com/muffledMitosis"} />
      </div>
    </div>
  );

  return elem;
}

export default Header;