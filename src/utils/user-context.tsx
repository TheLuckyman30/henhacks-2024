import { createContext, useContext, useState, type ReactNode } from "react";

interface UserContextType {
  textContent: string;
  letterSpacing: number;
  setTextContent: (newText: string) => void;
  setLetterSpacing: (newSpacing: number) => void;
}

const UserContext = createContext<UserContextType>({
  textContent: "",
  letterSpacing: 0,
  setTextContent: () => {},
  setLetterSpacing: () => {},
});

export function UserContextProvider({ children }: { children: ReactNode }) {
  const [textContent, setTextContent] = useState<string>("");
  const [letterSpacing, setLetterSpacing] = useState<number>(0);

  const providerValue = {
    textContent,
    letterSpacing,
    setTextContent,
    setLetterSpacing,
  };

  return (
    <UserContext.Provider value={providerValue}>
      {children}
    </UserContext.Provider>
  );
}

export function useUserContext() {
  const userContext = useContext(UserContext);
  return userContext;
}
