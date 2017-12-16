import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import RefinementFilter from './RefinementFilter';

const Padded = styled.div`
  margin: 1em;
  width: 200px;
`;

const SideBar = ({ tagGroups, setSelectedState }) => {
  return (
    <Padded>
      {tagGroups.map((tagGroup, i) => (
        <RefinementFilter
          key={i}
          name={tagGroup.name}
          options={tagGroup.tags}
          selectedOptions={tagGroup.selectedTags}
          setOptions={options =>
            setSelectedState({
              group: tagGroup.name,
              tags: options,
            })
          }
        />
      ))}
    </Padded>
  );
};

SideBar.propTypes = {
  tagGroups: PropTypes.array.isRequired,
  setSelectedState: PropTypes.func.isRequired,
};

export default SideBar;
