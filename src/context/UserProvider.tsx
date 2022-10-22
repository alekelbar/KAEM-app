import { DefaultUser, Session } from 'next-auth'
import React, { useState } from 'react'
import { sessionUserState, UserContext } from './UserContext'

type userContextProps = {
  children: [JSX.Element] | JSX.Element,
  session?: Session
}

export const UserProvider = ({ children }: userContextProps) => {

  const [user, setUser] = useState<DefaultUser>({ id: 'pending' });

  const sessionState: sessionUserState = {
    user: user,
    handleUser: (newUser: DefaultUser) => { setUser(newUser); },
  }

  return (
    <UserContext.Provider value={sessionState} >

      {children}

    </UserContext.Provider >
  )
}