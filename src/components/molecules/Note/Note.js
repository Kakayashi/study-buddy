import React from 'react';
import { Title } from 'components/atoms/Title/Title';
import styled from 'styled-components';
import DeleteButton from 'components/atoms/DeleteButton/DeleteButton';

export const NoteWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;

  h3,
  p {
    margin: 0;
    color: ${({ theme }) => theme.colors.darkGrey};
  }
`;
const StyledDeleteButton = styled(DeleteButton)`
  position: absolute;
  top: 20px;
  left: -40px;
`;

function Note() {
  return (
    <NoteWrapper>
      <Title>Title</Title>
      <p>LOrem ipsum LOrem ipsumLOrem ipsumLOrem ipsumLOrem ipsumLOrem ipsumLOrem ipsumLOrem ipsum</p>
      <StyledDeleteButton />
    </NoteWrapper>
  );
}

export default Note;
