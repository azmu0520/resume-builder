import { useReducer, createContext, useContext } from "react";
import { Reducer, initialState } from "./reducer";

export const UserDataContext = createContext();

export const UseUserDataContext = () => useContext(UserDataContext);

// eslint-disable-next-line react/prop-types
export const UserDataProvider = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, initialState);

  return (
    <UserDataContext.Provider value={[state, dispatch]}>
      {children}
    </UserDataContext.Provider>
  );
};
