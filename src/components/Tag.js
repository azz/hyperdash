import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Tag = ({ name, className }) => {
  return <span {...{ className }}>{name}</span>;
};

Tag.propTypes = {
  name: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default styled(Tag)`
  margin-right: 0.5em;
  background: #222;
  color: #fff;
  opacity: 0.8;
  padding: 4px;
`;
