import styled from 'styled-components';

export const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.lightGrey};
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
`;

export const NavLeft = styled.div`
  width: 118px;
  height: 100vh;
  border-right: 1px solid ${({ theme }) => theme.colors.darkGrey};
  display: flex;
  flex-direction: column;
  align-items: center;
  font-weight: bold;
`;

export const Container = styled.div`
  display: flex;
  background-color: ${({ theme }) => theme.colors.lightGrey};
`;

export const Text = styled.div`
  color: ${({ theme }) => theme.colors.darkGrey};
  justify-content: center;
  align-items: center;
  font-size: ${({ theme }) => theme.fontSize.l};
  margin-top: 15px;
  text-decoration: none;
`;

export const Spa = styled.div`
  height: 50px;
`;
