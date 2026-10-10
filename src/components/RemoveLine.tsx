import { Button } from "react-bootstrap";

interface RemoveLineProps {
  textContent: string;
  setTextContent: (newText: string) => void;
}

export function RemoveLine({ textContent, setTextContent }: RemoveLineProps) {
  const removeLine = () => {
    const lines = textContent.split(/(?<=[.?!])/g);
    const newLines: string[] = [];
    for (const line of lines) {
      const newLine = line.replace("\n", "");
      newLines.push(newLine);
    }

    setTextContent(newLines.join(""));
  };

  return (
    <Button onClick={removeLine} disabled={textContent === ""}>
      Remove a Line
    </Button>
  );
}
