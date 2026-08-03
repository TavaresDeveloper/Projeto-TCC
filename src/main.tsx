
  import { createRoot } from "react-dom/client";
  // Provide a minimal ambient declaration when @types/react-dom is not installed
  // (prevents TS7016: Cannot find declaration file for module 'react-dom/client')
  declare module "react-dom/client";
  import App from "./app/App.tsx";
  // @ts-ignore: allow importing CSS without type declarations
  import "./styles/index.css";

  createRoot(document.getElementById("root")!).render(<App />);
  