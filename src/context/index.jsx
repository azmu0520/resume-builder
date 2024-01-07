import { UserDataProvider } from "./UserData";

// eslint-disable-next-line react/prop-types
export const MainProvider = ({ children }) => {
  return <UserDataProvider>{children}</UserDataProvider>;
};
