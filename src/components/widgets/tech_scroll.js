import * as React from 'react';
import { StaticQuery, graphql } from 'gatsby';

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
		</motion.div>		
	);

	return (
		<div className="flex flex-row overflow-hidden">
			<div className="flex flex-row items-center tech-lineup">
				{images}
				{images}
			</div>
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