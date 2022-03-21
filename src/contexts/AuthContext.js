import React, {createContext, useState} from 'react';
import {getUsers, createUser} from '../network/requests/auth';

const AuthContext = createContext();

export const AuthContextProvider = ({children}) => {
  const [userSession, setUserSession] = useState([]);
  const [response, setResponse] = useState('');

  const Register = async formData => {
    const users = await getUsers();
    const userData = {
      id: users.data.length + 1,
      ...formData,
    };
    console.log(formData);

    if (users.data.find(user => user.username === userData.username)) {
      setResponse({username: 'username already in use'});
    } else {
      setResponse({});
      try {
        createUser(userData);
        console.log('success');
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <AuthContext.Provider value={{userSession, Register, response}}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
