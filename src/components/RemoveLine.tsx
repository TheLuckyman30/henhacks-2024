import { useUserContext } from "@utils/user-context";
import { Button } from "./Button";

export function RemoveLine() {
  const { textContent, setTextContent } = useUserContext();

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
