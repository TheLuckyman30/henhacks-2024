import { useUserStore } from "@utils/user-store";
import { Button } from "./Button";

export function RemoveLine() {
  const textContent = useUserStore((s) => s.textContent);
  const setTextContent = useUserStore((s) => s.setTextContent);

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
