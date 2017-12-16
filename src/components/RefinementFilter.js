import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import MiniButton from './MiniButton';

const RefinementFilter = ({
  name,
  options,
  selectedOptions,
  setOptions,
  className,
}) => {
  return (
    <div {...{ className }}>
      <span>
        {name}{' '}
        <MiniButton
          text="none"
          onClick={() => {
            setOptions([]);
          }}
        />{' '}
        <MiniButton
          text="all"
          onClick={() => {
            setOptions(options);
          }}
        />
      </span>
      {options.map(option => (
        <RefinementOption
          key={option}
          text={option}
          isChecked={selectedOptions.includes(option)}
          onChange={isChecked =>
            setOptions(
              isChecked
                ? [...selectedOptions, option]
                : selectedOptions.filter(_option => _option !== option)
            )
          }
        />
      ))}
    </div>
  );
};

RefinementFilter.propTypes = {
  name: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  selectedOptions: PropTypes.arrayOf(PropTypes.string).isRequired,
  setOptions: PropTypes.func.isRequired,
  className: PropTypes.string,
};

const RefinementOption = ({ text, isChecked, onChange }) => {
  return (
    <div>
      <label>
        <input
          type="checkbox"
          checked={isChecked}
          onChange={event => onChange(event.target.checked)}
        />
        {text}
      </label>
    </div>
  );
};

RefinementOption.propTypes = {
  isChecked: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
};

export default styled(RefinementFilter)`
  margin-bottom: 1em;
`;
