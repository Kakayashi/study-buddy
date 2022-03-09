import React from 'react';
import { Nav, Logo, Left, User, U1, U2 } from './Navbar.style';

function Navbar() {
  return (
    <>
      <Nav>
        <Logo>
          <div>Study Buddy</div>
        </Logo>
        <Left>
          <User>
            <U1>Logged as:</U1>
            <U2>Teacher</U2>
          </User>
        </Left>
      </Nav>
    </>
  );
}

export default Navbar;
