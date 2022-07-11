import React from 'react';
import styled from 'styled-components';
import FormField from 'components/molecules/FormField/FormField';
import { Button } from 'components/atoms/Button/Button';
import { Title } from 'components/atoms/Title/Title';
import DeleteButton from 'components/atoms/DeleteButton/DeleteButton';

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 0.7fr 1.3fr;
  grid-gap: 30px;
  padding: 30px;
`;

export const FormWrapper = styled.div`
  padding: 40px;
  background: ${({ theme }) => theme.colors.white};
  border-radius: 25px;
  width: 100%;
  height: 80%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;

export const StyledFormField = styled(FormField)`
  height: ${({ isTextarea }) => (isTextarea ? '300px' : 'unset')};
`;

export const NotesWrapper = styled.div`
  padding: 20px 60px;
  display: flex;
  flex-direction: column;
`;

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

function Notes() {
  return (
    <Wrapper>
      <FormWrapper>
        <StyledFormField label="Notes" name="notes" id="notes" />
        <StyledFormField isTextarea label="Content" name="Content" id="Content" />
        <Button>Add</Button>
      </FormWrapper>
      <NotesWrapper>
        <NoteWrapper>
          <Title>Title</Title>
          <p>LOrem ipsum LOrem ipsumLOrem ipsumLOrem ipsumLOrem ipsumLOrem ipsumLOrem ipsumLOrem ipsum</p>
          <StyledDeleteButton />
        </NoteWrapper>
        <NoteWrapper>
          <Title>Title</Title>
          <p>LOrem ipsum LOrem ipsumLOrem ipsumLOrem ipsumLOrem ipsumLOrem ipsumLOrem ipsumLOrem ipsum</p>
          <StyledDeleteButton />
        </NoteWrapper>
        <NoteWrapper>
          <Title>Title</Title>
          <p>LOrem ipsum LOrem ipsumLOrem ipsumLOrem ipsumLOrem ipsumLOrem ipsumLOrem ipsumLOrem ipsum</p>
          <StyledDeleteButton />
        </NoteWrapper>
      </NotesWrapper>
    </Wrapper>
  );
}

export default Notes;
