import styled from 'styled-components';
import FormField from 'components/molecules/FormField/FormField';

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
