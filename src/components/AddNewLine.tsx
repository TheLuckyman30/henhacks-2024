import { Button } from "react-bootstrap";

interface AddNewLineProps {
  textContent: string;
  setTextContent: (newText: string) => void;
}

export function AddNewLine({ textContent, setTextContent }: AddNewLineProps) {
  function addLine() {
    const sentences = textContent.split(".");
    const newLines = sentences
      .map((senetence: string): string => senetence + ".\n")
      .join("");
    setTextContent(newLines);
  }

  return (
    <Button onClick={addLine} disabled={textContent === ""}>
      Add a new Line
    </Button>
  );
}
