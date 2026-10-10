import { useUserContext } from "@utils/user-context";
import { Button } from "./Button";

export function AddNewLine() {
  const { textContent, setTextContent } = useUserContext();

  const addLine = () => {
    setTextContent(textContent.split(/(?<=[.?!])/g).join("\n"));
  };

  return (
    <Button onClick={addLine} disabled={textContent === ""}>
      Add a new Line
    </Button>
  );
}
