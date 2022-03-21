import React from 'react';
import {AuthContextProvider} from './src/contexts/AuthContext';

import Register from './src/screens/Auth/Register';

const App = () => {
  return (
    <AuthContextProvider>
      <Register />
    </AuthContextProvider>
  );
};

export default App;
