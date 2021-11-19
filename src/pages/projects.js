import {graphql} from 'gatsby';
import * as React from 'react';
import {GiHammerDrop} from 'react-icons/gi';
import Layout from '../components/layout';
import ProjectCard from '../components/widgets/project_card';

const ProjectsPage = ({data: {allMarkdownRemark: {edges}}}) => {

  const ProjC = (edge) => {
  //   return <ProjectCard
		// 	gotoLink={edge.node.frontmatter.slug}
		// 	img={edge.node.frontmatter.imageLocation.childImageSharp.fluid}
		// 	projectName={edge.node.frontmatter.title}
		// 	introText={edge.node.frontmatter.intro}
		// />
		return <div className="text-mdd-green-light text-2xl ml-2">
			<GiHammerDrop className="inline text-mdd-red-light" /> WORK IN PROGRESS
			</div>
  }

  const posts = edges
    .filter(edge => edge.node.frontmatter.type == "proj")
    .map(edge => ProjC(edge));

  return(
    <Layout>
      <div className="min-h-screen">
        <div className="mt-4 general-text grid gird-cols-1 lg:grid-cols-2 lg:px-32">
          {posts}
        </div>
    	</div>
    </Layout>
  );
};

export default ProjectsPage;

export const pageQuery = graphql`
query ProjListQ {
  allMarkdownRemark {
    edges {
      node {
        frontmatter {
          type
          slug
          title
          intro
          imageLocation {
             childImageSharp {
            fluid(maxWidth: 800) {
              ...GatsbyImageSharpFluid
            }
          }
          }
        }
      }
    }
  }
}

`
