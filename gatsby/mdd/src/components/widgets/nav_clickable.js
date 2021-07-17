import * as React from 'react';
import { FiActivity, FiBriefcase } from 'react-icons/fi';

const NavClickable = ({icon, name, onClickLocation, color}) => {
	let iconProp = React.createElement("div");
	console.log(iconProp);
	return (
		<div className="flex items-center content-center space-x-2 cursor-pointer" onClick={()=>window.location.href=onClickLocation}>
			<div className={"cursor-pointer text-lg " + color}>{iconProp}</div>
			<div className="text-white font-fira-code">{name}</div>
		</div>
	);
};

export default NavClickable;