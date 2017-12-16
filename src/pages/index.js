import React from 'react';
import { objectOf, object } from 'prop-types';
// import Link from 'gatsby-link';

const IndexPage = ({ data: { allLinksYaml } }) => (
  <div>
    <p>
      {allLinksYaml.edges.map(({ node }) => (
        <span key={node.name}>{node.name}</span>
      ))}
    </p>
  </div>
);

IndexPage.propTypes = {
  data: objectOf({
    allLinksYaml: object,
  }),
};

export const pageQuery = graphql`
  query AllLinks {
    allLinksYaml {
      edges {
        node {
          name
          tags
          url
        }
      }
    }
  }
`;

export default IndexPage;
