import React from 'react';
import { ReactComponent as DeleteIcon } from 'assets/icons/delete-icon.svg';
import { StyledButton } from './Button.style';

const Button = (props) => (
  <StyledButton {...props}>
    <DeleteIcon></DeleteIcon>
  </StyledButton>
);

export default Button;