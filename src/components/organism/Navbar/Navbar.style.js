import styled from 'styled-components';

export const Nav = styled.div`
  width: 100vw;
  height: 80px;
  display: flex;
  flex-direction: row;
  background-color: ${({ theme }) => theme.colors.lightGrey};
  border-bottom: 1px solid ${({ theme }) => theme.colors.darkGrey};
`;

export const Logo = styled.div`
  width: 110px;
  background-color: ${({ theme }) => theme.colors.darkGrey};
  height: 60px;
  margin-top: 20px;
  color: white;
  //font-size: ${({ theme }) => theme.fontSize.l};
  font-size: 20px;
  align-items: flex-end;
  text-align: center;
  padding: 10px;
  padding-left: 30px;
  cursor: pointer;
`;

export const Left = styled.div`
  width: 110px;
  height: 80px;
  border-left: 1px solid ${({ theme }) => theme.colors.darkGrey};
`;

export const User = styled.div`
  width: 160px;
  height: 60px;
  margin-top: 20px;
  flex-direction: column;
  color: ${({ theme }) => theme.colors.darkGrey};
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const U1 = styled.div`
  font-size: ${({ theme }) => theme.fontSize.m};
`;
export const U2 = styled.div`
  font-size: ${({ theme }) => theme.fontSize.xl};
`;
