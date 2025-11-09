import React from 'react';

const newContext = React.createContext({
  user: {
    email: '',
    password: '',
    isLoggedIn: false,
  },
  logOut: () => {},
});

export default newContext;
