import { useState } from "react";
import { Button } from "react-bootstrap";

interface MakeUppercaseProps {
  textContent: string;
  setTextContent: (newText: string) => void;
}

export function MakeUppercase({
  textContent,
  setTextContent,
}: MakeUppercaseProps) {
  const [isChanged, setIsChanged] = useState<boolean>(false);

  function changeText(): void {
    if (!isChanged) {
      const sentences: string[] = textContent.split(".\n");
      const modifiedText = sentences
        .map((sentence: string): string => changeWord(sentence))
        .join(".\n");
      setTextContent(modifiedText);
      setIsChanged(true);
    } else {
      const sentences: string[] = textContent.split(".\n");
      const modifiedText = sentences
        .map((sentence: string): string => changeWord(sentence))
        .join(".\n");
      setTextContent(modifiedText);
      setIsChanged(false);
    }
  }

  function changeWord(sentence: string): string {
    const words: string[] = sentence.split(" ");
    if (!isChanged) {
      return words
        .map(
          (word: string): string =>
            `${word.charAt(0).toUpperCase()}${word.slice(1)}`,
        )
        .join(" ");
    }
    return words
      .map(
        (word: string): string =>
          `${sentence.indexOf(word) !== 0 ? word.charAt(0).toLowerCase() : word.charAt(0)}${word.slice(1)}`,
      )
      .join(" ");
  }

  return (
    <div>
      <Button onClick={changeText} disabled={textContent === ""}>
        Make Uppercase
      </Button>
    </div>
  );
}
