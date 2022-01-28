import { StaticImage } from 'gatsby-plugin-image';
import * as React from 'react';
import Img from "gatsby-image";

const BlogCard = ({gotoLink, img, mainHeader, timeStamp, introText}) => {
  return(
	<div className="w-8/12 cursor-pointer pl-10" onClick={()=>window.location.href=gotoLink}>
		<Img className="pl-6 mb-6 w-100" fluid={img} />
		<div className="card-h font-light text-2xl">{mainHeader}</div>
		<div className="general-text text-xs pl-1 my-2">{timeStamp}</div>
		<div className="general-text font-thin text-sm">{introText}</div>
	</div>
  );
};

export default BlogCard;