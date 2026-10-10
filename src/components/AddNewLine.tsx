import { Button } from "react-bootstrap";

interface AddNewLineProps {
  textContent: string;
  setTextContent: (newText: string) => void;
}

export function AddNewLine({ textContent, setTextContent }: AddNewLineProps) {
  const addLine = () => {
    setTextContent(textContent.split(/(?<=[.?!])/g).join("\n"));
  };

  return (
    <Button onClick={addLine} disabled={textContent === ""}>
      Add a new Line
    </Button>
  );
}
