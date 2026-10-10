import { useUserStore } from "@utils/user-store";
import { Button } from "./Button";

export function AddNewLine() {
  const textContent = useUserStore((s) => s.textContent);
  const setTextContent = useUserStore((s) => s.setTextContent);

  const addLine = () => {
    setTextContent(textContent.split(/(?<=[.?!])/g).join("\n"));
  };

  return (
    <Button onClick={addLine} disabled={textContent === ""}>
      Add a new Line
    </Button>
  );
}
