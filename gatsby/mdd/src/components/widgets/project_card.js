import * as React from 'react';
import Img from "gatsby-image";

const ProjectCard = ({gotoLink, img, projectName, introText}) => {
  return(
	<div className="w-100 cursor-pointer relative" onClick={()=>window.location.href=gotoLink}>
		<div className=""><Img className="w-100" fluid={img} /></div>
		<div className="project-card-gradient"></div>
		<div className="absolute z-50 bottom-0 project-card-text ml-4 mb-2">
			<div className="card-h font-light text-2xl">{projectName}</div>
			<div className="general-text font-thin text-sm">{introText}</div>
		</div>
	</div>
  );
};

export default ProjectCard;