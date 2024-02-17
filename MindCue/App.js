import React from 'react';
import {AuthProvider} from './contexts/authContext';
import Routes from './routes/routes';

const App = () => {
  return (
    <AuthProvider >
      <Routes/>
    </AuthProvider>
  );
};

export default App;