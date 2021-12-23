import React from 'react';
import PropTypes from 'prop-types';
import { ReactComponent as DeleteIcon } from 'assets/icons/delete-icon.svg';
import Button from 'components/atoms/Button/Button';
import { Wrapper, Average, Info } from './UsersListItem.style';

const UsersListItem = ({ deleteUser, userData: { average, name, attendance = '0%' } }) => (
  <Wrapper>
    <Average average={average}>{average}</Average>
    <div>
      <Info>
        <p>{name}</p>
        <p>{attendance}</p>
      </Info>
    </div>
    <Button onClick={() => deleteUser(name)}></Button>
  </Wrapper>
);

UsersListItem.propTypes = {
  userData: PropTypes.shape({
    average: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    attendance: PropTypes.string,
  }),
};

export default UsersListItem;
