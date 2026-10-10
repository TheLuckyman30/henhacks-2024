import { useState } from "react";
import { Button } from "react-bootstrap";

interface MakeLastUpperProps {
  textContent: string;
  setTextContent: (newText: string) => void;
}

export function MakeLastUpper({
  textContent,
  setTextContent,
}: MakeLastUpperProps) {
  const [isLastUpper, setIsLastUpper] = useState<boolean>(false);

  function changeText(): void {
    if (!isLastUpper) {
      const sentences: string[] = textContent.split(".\n");
      const modifiedText = sentences
        .map((sentence: string): string => changeWord(sentence))
        .join(".\n");
      setTextContent(modifiedText);
      setIsLastUpper(true);
    } else {
      const sentences: string[] = textContent.split(".\n");
      const modifiedText = sentences
        .map((sentence: string): string => changeWord(sentence))
        .join(".\n");
      setTextContent(modifiedText);
      setIsLastUpper(false);
    }
  }

  function changeWord(sentence: string): string {
    const words: string[] = sentence.split(" ");
    if (!isLastUpper) {
      return words
        .map(
          (word: string): string =>
            `${word.slice(0, word.length - 1)}${word.charAt(word.length - 1).toUpperCase()}`,
        )
        .join(" ");
    }
    return words
      .map(
        (word: string): string =>
          `${word.slice(0, word.length - 1)}${word.charAt(word.length - 1).toLowerCase()}`,
      )
      .join(" ");
  }

  return (
    <div>
      <Button onClick={changeText} disabled={textContent === ""}>
        Make Last Uppercase
      </Button>
    </div>
  );
}
