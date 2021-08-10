import {graphql} from 'gatsby';
import * as React from 'react';
import Layout from '../components/layout';
import ProjectCard from '../components/widgets/project_card';

const ProjectsPage = ({data: {allMarkdownRemark: {edges}}}) => {

  const ProjC = (edge) => {
    return <ProjectCard
			gotoLink={edge.node.frontmatter.slug}
			img={edge.node.frontmatter.imageLocation.childImageSharp.fluid}
			projectName={edge.node.frontmatter.title}
			introText={edge.node.frontmatter.intro}
		/>
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