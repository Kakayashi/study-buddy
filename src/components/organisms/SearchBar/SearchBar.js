import React, { useState, useEffect } from 'react';
import { Input } from 'components/atoms/Input/Input';
import { SearchBarWrapper, StatusInfo, SearchFild } from './SearchBar.styles';
import axios from 'axios';

export const SearchBar = () => {
  const [students, setStudents] = useState([]);
  const [machingstudents, setMachingStudents] = useState([]);
  const [inputValue, setInputValue] = useState([]);

  useEffect(() => {
    axios
      .get(`/students`)
      .then(({ data }) => setStudents(data.students))
      //.then(({ data }) => console.log(data))
      .catch((err) => console.log(err));
  }, []);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  useEffect(() => {
    let titles;
    titles = students.map((e) => e.name);
    titles = titles.filter((e) => e.match(inputValue));
    setMachingStudents(titles);
    console.log(machingstudents.length);
    console.log(inputValue);
  }, [inputValue]);

  return (
    <SearchBarWrapper>
      <StatusInfo>
        <p>Logged as:</p>
        <p>
          <strong>Teacher</strong>
        </p>
      </StatusInfo>

      <SearchFild>
        <Input value={inputValue} onChange={handleInputChange} />
        {machingstudents.length < 6 ? machingstudents.map((e) => <Input key={e} readOnly value={e}></Input>) : ''}
      </SearchFild>
    </SearchBarWrapper>
  );
};
export default SearchBar;
