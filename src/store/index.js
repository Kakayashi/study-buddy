export const addNote = (payload) => {
  return {
    type: 'notes/add',
    payload,
  };
};

export const removeNote = (payload) => {
  return {
    type: 'notes/remove',
    payload,
  };
};
