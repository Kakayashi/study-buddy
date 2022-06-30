import React from 'react';
import { StyledAverage } from 'components/molecules/StudentsListItem/StudentsListItem.styles';
import { Title } from 'components/atoms/Title/Title';
function StudentDetails({ student }) {
  return (
    <div>
      <Title>
        {student.name} | Group {student.group}
      </Title>
      <p>{student.attendance}</p>
      <StyledAverage value={student.average}>{student.average} </StyledAverage>
    </div>
  );
}

export default StudentDetails;
