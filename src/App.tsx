import { useState } from "react";
import {
  LetterSpacing,
  AddNewLine,
  RemoveLine,
  FileDragger,
  ChangeCasing,
} from "./components";
import "./App.css";

function App() {
  const [textContent, setTextContent] = useState<string>("");

  return (
    <div>
      <div
        className="App-header"
        style={{ justifyContent: "flex-start", fontFamily: "Arial" }}
      >
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
        <LetterSpacing />
        <AddNewLine textContent={textContent} setTextContent={setTextContent} />
        <RemoveLine textContent={textContent} setTextContent={setTextContent} />
        <FileDragger setTextContnet={setTextContent} />
        <p
          style={{
            display: "flex",
            whiteSpace: "pre-line",
            fontSize: "20px",
            textAlign: "left",
          }}
          id="changeText11"
        >
          {textContent}
        </p>
      </div>
    </div>
  );
}
export default App;
