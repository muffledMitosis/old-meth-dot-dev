import * as React from 'react';
import NavClickable from './widgets/nav_clickable';

const Layout = ({children}) => {
	return (
		<main>
			<NavClickable name="Projects" onClickLocation="google.com" color="text-mdd-red-strong"/>

			{children}
		</main>
	);
};

export default Layout;