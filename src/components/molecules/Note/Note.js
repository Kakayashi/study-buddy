import React from 'react';
import { Title } from 'components/atoms/Title/Title';
import styled from 'styled-components';
import DeleteButton from 'components/atoms/DeleteButton/DeleteButton';
import { useDispatch, useSelector } from 'react-redux';
import { removeNote } from 'store';

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

function Note({ title = 'Untilted', content = 'No content', id }) {
  const dispatch = useDispatch();

  const handleRemoveNote = () => {
    dispatch(removeNote({ id: id }));
  };

  return (
    <NoteWrapper>
      <Title>{title}</Title>
      <p>{content}</p>
      <StyledDeleteButton onClick={handleRemoveNote} />
    </NoteWrapper>
  );
}

export default Note;
