import {
  LetterSpacing,
  AddNewLine,
  RemoveLine,
  FileDragger,
  ChangeCasing,
  TextContent,
} from "@components";
import "@css/App.css";
import { useRef } from "react";

function App() {
  const originalLetters = useRef(new Map<number, string>());

  return (
    <div className="main">
      <ChangeCasing ref={originalLetters} letterToChange="first" />
      <ChangeCasing ref={originalLetters} letterToChange="last" />
      <LetterSpacing />
      <AddNewLine />
      <RemoveLine />
      <FileDragger ref={originalLetters} />
      <TextContent />
    </div>
  );
}
export default App;
