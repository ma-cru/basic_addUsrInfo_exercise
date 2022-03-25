import React, { createContext, useState } from 'react';

import Card from './components/Card';
import EintraegerContainer from './components/EintraegerContainer';
import Liste from './components/Liste';

const UserContext = createContext({});

function App() {

  const [users, setUsers] = useState([]);

  const processUserInfo = user => {

      setUsers(prevUsers => {

          const newUser = {
              id: (Math.floor(Math.random * 1000)),
              ...user
          };

          console.log(prevUsers);

          console.log(user);

          return [newUser, ...prevUsers]

      });

  }

  // const processUserInfo = msg => {

  //   console.log(msg);

  //   setUser(msg);

  // }

  return (

    <Card>
      <UserContext.Provider value={users}>
        <EintraegerContainer
          updateUser={processUserInfo}
        />
        <Liste />
      </UserContext.Provider>
    </Card>

  );
}

export { App, UserContext };