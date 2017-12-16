import React from 'react';
import PropTypes from 'prop-types';

const MiniButton = ({ text, onClick }) => {
  return (
    <small>
      <a
        href="#"
        onClick={event => {
          event.preventDefault();
          onClick();
        }}>
        {text}
      </a>
    </small>
  );
};

MiniButton.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default MiniButton;
