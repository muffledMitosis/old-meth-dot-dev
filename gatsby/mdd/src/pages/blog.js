import {graphql} from 'gatsby';
import * as React from 'react';
import Layout from '../components/layout';
import BlogCard from '../components/widgets/blog_card';

const BlogPage = ({data: {allMarkdownRemark: {edges}}}) => {

  const BC = (edge) => {
    return <div className="p-4 pl-10 pt-10">
      <BlogCard 
        gotoLink={edge.node.frontmatter.slug}
        img={edge.node.frontmatter.imageLocation.childImageSharp.fluid}
        mainHeader={edge.node.frontmatter.title}
        timeStamp={edge.node.frontmatter.date}
        introText={edge.node.frontmatter.intro}
      />
    </div>
  }

  const posts = edges
    .filter(edge => !!edge.node.frontmatter.date)
    .map(edge => BC(edge));

  return(
    <Layout>
      <div className="min-h-screen">
        <div className="general-text grid gird-cols-1 lg:grid-cols-2">
          {posts}
        </div>
    	</div>
    </Layout>
  );
};

export default BlogPage;

export const pageQuery = graphql`
query BlogListQ {
  allMarkdownRemark {
    edges {
      node {
        frontmatter {
          date
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