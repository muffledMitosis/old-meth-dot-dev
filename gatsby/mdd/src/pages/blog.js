import { Link, graphql} from 'gatsby';
import * as React from 'react';
import Layout from '../components/layout';

const BlogPage = ({data: {allMarkdownRemark: {edges}}}) => {
  const posts = edges
    .filter(edge => !!edge.node.frontmatter.date)
    .map(edge => <Link to={edge.node.frontmatter.slug}>{edge.node.frontmatter.title}</Link>)
  return(
    <Layout>
      <div className="h-screen">
				{/* Show List of blogs */}
        {posts}
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
        }
      }
    }
  }
}

`