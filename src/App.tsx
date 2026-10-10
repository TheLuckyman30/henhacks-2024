import { useState } from "react";
import {
  LetterSpacing,
  AddNewLine,
  RemoveLine,
  FileDragger,
  ChangeCasing,
} from "@components";
import "@css/App.css";

function App() {
  const [textContent, setTextContent] = useState<string>("");
  const [letterSpacing, setLetterSpacing] = useState<number>(0);

  return (
    <div className="main">
      <ChangeCasing
        textContent={textContent}
        letterToChange="first"
        setTextContent={setTextContent}
      />
      <ChangeCasing
        textContent={textContent}
        letterToChange="last"
        setTextContent={setTextContent}
      />
      <LetterSpacing setLetterSpacing={setLetterSpacing} />
      <AddNewLine textContent={textContent} setTextContent={setTextContent} />
      <RemoveLine textContent={textContent} setTextContent={setTextContent} />
      <FileDragger setTextContnet={setTextContent} />
      <div className="main-text" style={{ letterSpacing }}>
        {textContent}
      </div>
    </div>
  );
}
export default App;
