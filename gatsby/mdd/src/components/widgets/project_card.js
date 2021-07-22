import * as React from 'react';
import Img from "gatsby-image";

const ProjectCard = ({gotoLink, img, projectName, introText}) => {
  return(
	<div className="w-8/12 cursor-pointer pl-10" onClick={()=>window.location.href=gotoLink}>
		<Img className="w-100" fluid={img} />
		{/* <div className="card-h font-light text-2xl">{projectName}</div>
		<div className="general-text font-thin text-sm">{introText}</div> */}
	</div>
  );
};

export default ProjectCard;