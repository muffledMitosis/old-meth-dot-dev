import { graphql, StaticQuery } from 'gatsby';
import * as React from 'react';
import NavClickable from './widgets/nav_clickable';

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
					<div className="flex flex-row space-x-4 items-center justify-end mr-3 -mt-3">{data.site.siteMetadata.navbarInfo.map(item => <li><NavClickable name={item.name} onClickLocation={item.onClickLocation} color={item.color}/></li>)}</div>
				</React.Fragment>
			)} />
			{children}
		</main>
	);
};

export default Layout;