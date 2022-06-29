import styled from 'styled-components';

export const DashboardWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const DashNav = styled.div`
  display: ${(props) => (props.Visible ? 'null' : 'none')};
`;

export const DashboardNav = styled.div`
  display: flex;
  flex-direction: row;
  padding: 0 40px;
  align-items: center;

  Button {
    margin-left: 20px;
    cursor: pointer;
  }
  nav a {
    text-decoration: none;
    padding: 10px;
    color: ${({ theme }) => theme.colors.darkGrey};
    background-color: ${({ theme }) => theme.colors.lightPurple};
    border-radius: 20px;
    margin-left: 5px;
  }
  nav a:hover {
    //font-weight: bold;
    color: ${({ theme }) => theme.colors.black};
  }
`;

export const GroupButton = styled.div`
  padding: 10px;
  background-color: ${({ theme }) => theme.colors.lightPurple};
  border-radius: 20px;
  border: none;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.darkGrey};
  cursor: pointer;
`;
