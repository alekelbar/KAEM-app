import { DefaultUser } from "next-auth";
import { createContext, Dispatch } from "react";

export type sessionUserState = {
  user: DefaultUser,
  handleUser: (user: DefaultUser) => void
}



export const UserContext = createContext<sessionUserState>({ handleUser: () => { }, user: { id: '' } });