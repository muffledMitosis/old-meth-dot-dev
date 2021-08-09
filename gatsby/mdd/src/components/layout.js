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

	const [navBarState, setNavBarState] = React.useState(true);
	
	const navBarFunc = (data) => (
		<div className="absolute right-0 bg-mdd-purple-dark z-50 md:bg-opacity-0 md:static md:flex md:flex-row md:space-x-4 md:items-center md:justify-end md:mr-6 md:mt-3">
			<div className="text-white cursor-pointer md:hidden" onClick={() => setNavBarState(!navBarState)}>HAM</div>
			<div className={(navBarState ? "hidden " : "block ") + "md:block md:flex md:flex-row md:space-x-4 md:items-center md:justify-end"}>
				{data.site.siteMetadata.navbarInfo.map(item => <div><NavClickable name={item.name} onClickLocation={item.onClickLocation} color={item.color}/></div>)}
				<div x-show="open" className="flex flex-row text-lg text-white space-x-3 mr-4">
					<FiInstagram className="cursor-pointer" onClick={() => window.location.href = "https://instagram.com/muffledmitosis"}/>
					<FiTwitter className="cursor-pointer" onClick={() => window.location.href = "https://twitter.com/muffledmitosis"} />
					<FiGithub className="cursor-pointer" onClick={() => window.location.href = "https://github.com/muffledMitosis"} />
				</div>
			</div>
		</div>
	)

	return (
		<main className="">
			<StaticQuery query={nav_querry} render={data => (
				<React.Fragment>
					{navBarFunc(data)}
				</React.Fragment>
			)} />
			{children}
		</main>
	);
};

export default Layout;