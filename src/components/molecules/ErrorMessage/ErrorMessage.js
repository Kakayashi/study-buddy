import { Title } from 'components/atoms/Title/Title';
import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper } from './ErrorMessage.style';

const defaultErrorMessage = 'Something go wrong. Please try again, or contact our support.';

const ErrorMessage = ({ message = defaultErrorMessage }) => {
  return (
    <Wrapper>
      <Title>Ooops!</Title>
      <p>{message}</p>
    </Wrapper>
  );
};

ErrorMessage.prototype = {
  message: PropTypes.string,
};

export default ErrorMessage;
