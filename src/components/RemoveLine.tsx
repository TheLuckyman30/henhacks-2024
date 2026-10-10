import { Button } from "react-bootstrap";

interface RemoveLineProps {
  textContent: string;
  setTextContent: (newText: string) => void;
}

export function RemoveLine({ textContent, setTextContent }: RemoveLineProps) {
  function removeLine() {
    const sentences = textContent.split(".\n");
    const newLines = sentences.join(".");
    setTextContent(newLines);
  }

  return (
    <Button onClick={removeLine} disabled={textContent === ""}>
      Remove a Line
    </Button>
  );
}
