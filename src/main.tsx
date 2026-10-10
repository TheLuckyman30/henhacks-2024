import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { UserContextProvider } from "@utils/user-context.tsx";
import App from "./App.tsx";
import "@css/index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <UserContextProvider>
      <App />
    </UserContextProvider>
  </StrictMode>,
);
