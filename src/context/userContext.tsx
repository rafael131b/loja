import { createContext, ReactNode, useState } from "react";

type userContextType = {
  isAdmin: boolean;
  setIsAdmin: (newState: boolean) => void;
  emailAdm: string;
  setEmailAdm: (newState: string) => void;
  passwordAdm: string;
  setPasswordAdm: (newState: string) => void;
  total: number;
  setTotal: (newState: number) => void;
};

const initialValue = {
  isAdmin: false,
  setIsAdmin: () => {},
  emailAdm: "",
  setEmailAdm: () => {},
  passwordAdm: "",
  setPasswordAdm: () => {},
  total: 0,
  setTotal: () => {},
};
type userContextProps = {
  children: ReactNode;
};

export const userContext = createContext<userContextType>(initialValue);

export const UseContextProvider = ({ children }: userContextProps) => {
  const [isAdmin, setIsAdmin] = useState(initialValue.isAdmin);
  const [emailAdm, setEmailAdm] = useState(initialValue.emailAdm);
  const [passwordAdm, setPasswordAdm] = useState(initialValue.passwordAdm);
  const [total, setTotal] = useState(initialValue.total);
  return (
    <userContext.Provider
      value={{
        isAdmin,
        setIsAdmin,
        emailAdm,
        setEmailAdm,
        passwordAdm,
        setPasswordAdm,
        total,
        setTotal,
      }}
    >
      {children}
    </userContext.Provider>
  );
};
