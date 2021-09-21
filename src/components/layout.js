import { graphql, StaticQuery } from 'gatsby';
import * as React from 'react';
import NavClickable from './widgets/nav_clickable';
import {FiTwitter, FiGithub, FiInstagram} from 'react-icons/fi';
import {GiHamburgerMenu} from 'react-icons/gi';
import { Helmet } from "react-helmet"

const Layout = ({children, title}) => {

	let nav_query = graphql`
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
		<div className={(navBarState ? "bg-none clearGradient " : "pl-4 main-bg-gradient-inverted ") + "clearGradient absolute h-full pr-4 pt-4 space-y-4 right-0 z-50 md:bg-opacity-0 md:static md:flex md:flex-row md:space-x-4 md:items-center md:justify-end md:mr-6 md:pt-0"}>
			<div className="text-white cursor-pointer md:hidden mb-4" onClick={() => setNavBarState(!navBarState)}><GiHamburgerMenu className="float-right mb-4 text-xl"/></div>
			<div className={(navBarState ? "hidden " : "block ") + "md:flex md:flex-row md:space-x-4 md:items-center md:justify-end navMenu space-y-2 md:space-y-0 md:pt-0 pt-4"}>
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
			<StaticQuery query={nav_query} render={data => (
				<React.Fragment>
					{navBarFunc(data)}
				</React.Fragment>
			)} />
			<Helmet>
				<title>{title}</title>
      </Helmet>
			{children}
		</main>
	);
};

export default Layout;