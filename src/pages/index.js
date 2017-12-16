import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
// import 'searchkit/release/theme.css';

import LinkPanel from '../components/LinkPanel';
import SideBar from '../components/SideBar';

const FlexContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

class IndexPage extends Component {
  state = {
    tagGroups: this.props.data.allTagGroupsYaml.edges.map(edge => ({
      ...edge.node,
      selectedTags: edge.node.tags,
    })),
    links: this.props.data.allLinksYaml.edges.map(edge => edge.node),
  };

  render() {
    const { tagGroups, links } = this.state;
    return (
      <FlexContainer>
        <SideBar
          tagGroups={tagGroups}
          setSelectedState={({ group, tags }) => {
            this.setState({
              tagGroups: tagGroups.map(
                tagGroup =>
                  tagGroup.name === group
                    ? {
                        ...tagGroup,
                        selectedTags: tags,
                      }
                    : tagGroup
              ),
            });
          }}
        />
        <div style={{ flexGrow: 1 }}>
          {links
            .filter(link => shouldDisplayLink(link, tagGroups))
            .map(link => <LinkPanel key={link.name} {...link} />)}
        </div>
      </FlexContainer>
    );
  }
}

IndexPage.propTypes = {
  data: PropTypes.object,
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
    allTagGroupsYaml {
      edges {
        node {
          name
          tags
        }
      }
    }
  }
`;

const shouldDisplayLink = (link, tagGroups) =>
  link.tags.every(tag => tagToGroup(tag, tagGroups).selectedTags.includes(tag));

const nullGroup = {
  name: null,
  tags: [],
  // selectedTags: [],
};

const tagToGroup = (tag, tagGroups) =>
  tagGroups.find(group => group.tags.includes(tag)) || nullGroup;

export default IndexPage;
