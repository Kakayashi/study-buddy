import React, { useState } from 'react';
import { Button } from 'components/atoms/Button/Button';
import { useDispatch, useSelector } from 'react-redux';
import Note from 'components/molecules/Note/Note';
import { addNote } from 'store';
import { StyledFormField, Wrapper, FormWrapper, NotesWrapper } from './Notes.style';
import ErrorMessage from 'components/molecules/ErrorMessage/ErrorMessage';

const initialFormState = {
  title: '',
  content: '',
};

function Notes() {
  const notes = useSelector((state) => state.notes);
  const [notesValue, setNotesValue] = useState(initialFormState);
  const [trigger, setTrigger] = useState(false);
  const dispatch = useDispatch();
  const handleInputChange = (e) => {
    const name = e.target.name;
    setNotesValue({ ...notesValue, [name]: e.target.value });
  };

  const handleAddNote = () => {
    console.log(notesValue);

    notesValue.title !== '' ? dispatch(addNote({ title: notesValue.title, content: notesValue.content })) : setTrigger(true);
  };

  return (
    <Wrapper>
      {console.log(notes)}
      <FormWrapper>
        <StyledFormField value={notesValue.title} onChange={handleInputChange} label="Notes" name="title" id="title" />
        <StyledFormField value={notesValue.content} onChange={handleInputChange} isTextarea label="Content" name="content" id="content" />
        <Button onClick={handleAddNote}>Add</Button>
      </FormWrapper>
      <NotesWrapper>
        {notes.length ? (
          notes.map(({ title, content, id }) => <Note id={id} key={id} title={title} content={content} />)
        ) : (
          <p>Create your first note</p>
        )}
      </NotesWrapper>
      {trigger ? <ErrorMessage message="Add title" /> : null}
    </Wrapper>
  );
}

export default Notes;
