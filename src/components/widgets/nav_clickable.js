import * as React from 'react';
import { FiActivity, FiBookOpen, FiBriefcase } from 'react-icons/fi';

const NavClickable = ({icon, name, onClickLocation, color}) => {
	let iconProp = <div>GIMME PROP UwU</div>
	switch (name) {
		case "Projects":
			iconProp = <FiActivity />;
			break;
		case "Blog":
			iconProp = <FiBookOpen />;
			break;
		case "About":
			iconProp = <FiBriefcase />;
			break;
		default:
			break;
	}
	return (
		<div className="flex items-center content-center space-x-2 cursor-pointer" onClick={()=>window.location.href=onClickLocation}>
			<div className={"cursor-pointer text-lg " + color}>{iconProp}</div>
			<div className="text-white font-fira-code">{name}</div>
		</div>
	);
};

export default NavClickable;