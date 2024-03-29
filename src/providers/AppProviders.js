import React from 'react';
import { GlobalStyle } from 'assets/styles/GlobalStyle';
import { theme } from 'assets/styles/theme';
import { AuthProvider } from 'hooks/useAuth';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { ErrorProvider } from 'hooks/useError';
import { Provider } from 'react-redux';
import { store } from 'store';

function AppProviders({ children }) {
  return (
    <Provider store={store}>
      <Router>
        <ThemeProvider theme={theme}>
          <ErrorProvider>
            <AuthProvider>
              <GlobalStyle />
              {children}
            </AuthProvider>
          </ErrorProvider>
        </ThemeProvider>
      </Router>
    </Provider>
  );
}

export default AppProviders;
