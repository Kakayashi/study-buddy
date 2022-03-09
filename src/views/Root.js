import React, { useState } from 'react';
import UsersList from 'components/organism/UsersList/UsersList';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from 'assets/styles/globalStyle';
import { theme } from 'assets/styles/theme';
import { Wrapper, NavLeft, Container, Text, Spa } from './Root.styles.js';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Form from 'components/organism/Form/Form';
import { users as usersData } from 'data/users';
import Navbar from 'components/organism/Navbar/Navbar.js';

const initialFormState = {
  name: '',
  attendance: '',
  average: '',
};

const Root = () => {
  const [users, setUsers] = useState(usersData);
  const [formValues, setFormValues] = useState(initialFormState);

  const deleteUser = (name) => {
    const filteredUsers = users.filter((user) => user.name !== name);
    setUsers(filteredUsers);
  };

  const handleInputChange = (e) => {
    console.log(formValues);
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };

  const handleAddUser = (e) => {
    e.preventDefault();
    const newUser = {
      name: formValues.name,
      attendance: formValues.attendance,
      average: formValues.average,
    };

    setUsers([newUser, ...users]);
    setFormValues(initialFormState);
  };

  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Navbar></Navbar>
        <Container>
          <NavLeft>
            <Spa></Spa>
            <Text>
              <Link to="/">Home</Link>
            </Text>
            <Text>
              <Link to="/add-user">Add user</Link>
            </Text>
            <Text>Another</Text>
          </NavLeft>
          <Wrapper>
            <Switch>
              <Route path="/add-user">
                <Form formValues={formValues} handleAddUser={handleAddUser} handleInputChange={handleInputChange} />
              </Route>
              <Route path="/">
                <UsersList deleteUser={deleteUser} users={users} />
              </Route>
            </Switch>
          </Wrapper>
        </Container>
      </ThemeProvider>
    </Router>
  );
};

export default Root;
