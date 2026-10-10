import { create } from "zustand";

interface UserStore {
  textContent: string;
  letterSpacing: number;
  setTextContent: (newText: string) => void;
  setLetterSpacing: (newSpacing: number) => void;
}

export const useUserStore = create<UserStore>((set) => ({
  textContent: "",
  letterSpacing: 0,
  setTextContent: (newText) => {
    set({ textContent: newText });
  },
  setLetterSpacing: (newSpacing) => {
    set({ letterSpacing: newSpacing });
  },
}));
