import React from 'react';
import GlobalStyle from './styles/global';
import SignIn from './Pages/Signin';
import SignUp from './Pages/Signup';
import AppProvider from './hooks';

const App: React.FC = () => (
  <>
    <AppProvider>
      <SignIn />
    </AppProvider>
    <GlobalStyle />
  </>
);

export default App;
