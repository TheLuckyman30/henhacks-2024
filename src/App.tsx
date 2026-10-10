import { useState } from "react";
import { DropFile } from "./components/FileDragger";
import { MakeUppercase } from "./components/MakeUppercase";
import { MakeLastUpper } from "./components/MakeLastUpper";
import { LetterSpacing } from "./components/LetterSpacing";
import { AddNewLine } from "./components/AddNewLine";
import { RemoveLine } from "./components/RemoveLine";
import "./App.css";

function App() {
  const [isDragOver, setisDragOver] = useState<boolean>(false);
  const [textContent, setTextContent] = useState<string>("");

  return (
    <div>
      <div
        className="App-header"
        style={{ justifyContent: "flex-start", fontFamily: "Arial" }}
      >
        <MakeUppercase
          textContent={textContent}
          setTextContent={setTextContent}
        />
        <MakeLastUpper
          textContent={textContent}
          setTextContent={setTextContent}
        />
        <LetterSpacing />
        <AddNewLine textContent={textContent} setTextContent={setTextContent} />
        <RemoveLine textContent={textContent} setTextContent={setTextContent} />
        <DropFile
          isDragOver={isDragOver}
          setIsDragOver={setisDragOver}
          setTextContnet={setTextContent}
        />
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
