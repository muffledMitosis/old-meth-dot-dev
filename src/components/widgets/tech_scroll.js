import * as React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import { motion } from 'framer-motion';

/*
C++
Cmake
Python
OpenGL
GraphQL
NodeJS
PHP
Gatsby
Arduino
AVR
BASH
ThreeJS
Firebase
*/

const query = graphql`
query TechLogoQuery {
	allFile(filter: {sourceInstanceName: {eq: "tech-logos"}}) {
    edges {
      node {
        publicURL
      }
    }
  }
}
`;

function view(data) {
	let imageNodes = data.allFile.edges;
	let images = imageNodes.map(node =>
					<div className="w-16 ml-14">
						<img
							src={node.node.publicURL} atl=""
						/>
					</div>
				);
	
	let animSection = (
		<motion.div
			animate={{
				x: -1000
			}}
			transition={{
				duration: 5
			}}
			exit={{
				opacity: 0
			}}
		>
			<div className="flex flex-row items-center">
				{images}
			</div>
		</motion.div>		
	);

	return (
		<div className="flex flex-row overflow-hidden">
			{animSection}
			{animSection}
		</div>
	);
}

const TechScroll = () => {
	return(
			<StaticQuery
				query={query}
				render={data => {
					return view(data);
				}}
			/>
		);
}

export default TechScroll;