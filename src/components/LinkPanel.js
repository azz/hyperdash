import React from 'react';
import PropTypes from 'prop-types';

import Tag from './Tag';
import styled from 'styled-components';

const LinkPanel = ({ url, name, tags, className }) => {
  return (
    <div {...{ className }}>
      <p>
        <div>{name}</div>
        <a href={url}>{url}</a>
      </p>
      <div>{tags.map(tag => <Tag key={tag} name={tag} />)}</div>
    </div>
  );
};

LinkPanel.propTypes = {
  url: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  className: PropTypes.string,
};

export default styled(LinkPanel)`
  margin: 1em;
  padding: 1em;
  background: #eee;
  opacity: 0.9;
`;
