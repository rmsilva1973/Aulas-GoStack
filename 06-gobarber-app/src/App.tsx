import React from 'react';
import GlobalStyle from './styles/global';
import SignIn from './Pages/Signin';
import SignUp from './Pages/Signup';

const App: React.FC = () => (
  <>
    <SignUp />
    <GlobalStyle />
  </>
);

export default App;
