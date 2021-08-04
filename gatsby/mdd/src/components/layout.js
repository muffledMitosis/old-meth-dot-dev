import { graphql, StaticQuery } from 'gatsby';
import * as React from 'react';
import NavClickable from './widgets/nav_clickable';
import {FiTwitter, FiGithub, FiInstagram} from 'react-icons/fi';

const Layout = ({children}) => {

	let nav_querry = graphql`
				query nav_bar_q {
  site {
    siteMetadata {
      navbarInfo {
        name
        color
        onClickLocation
      }
    }
  }
}
`;

	return (
		<main>
			<StaticQuery query={nav_querry} render={data => (
				<React.Fragment>
					<div className="flex flex-row space-x-4 items-center justify-end mr-3 -mt-3">
						{data.site.siteMetadata.navbarInfo.map(item => <li><NavClickable name={item.name} onClickLocation={item.onClickLocation} color={item.color}/></li>)}

						<div className="flex flex-row text-lg text-white space-x-3 mr-4 mt-6">
							<FiInstagram className="cursor-pointer" onClick={() => window.location.href = "https://instagram.com/muffledmitosis"}/>
							<FiTwitter className="cursor-pointer" onClick={() => window.location.href = "https://twitter.com/muffledmitosis"} />
							<FiGithub className="cursor-pointer" onClick={() => window.location.href = "https://github.com/muffledMitosis"} />
        		</div>
					</div>
				</React.Fragment>
			)} />
			{children}
		</main>
	);
};

export default Layout;