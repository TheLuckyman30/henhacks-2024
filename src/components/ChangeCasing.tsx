import { useRef, useState } from "react";
import { Button } from "./Button";

interface ChangeCasingProps {
  textContent: string;
  letterToChange: "first" | "last";
  setTextContent: (newText: string) => void;
}

const letterMatchRegex: Record<string, RegExp> = {
  first: /\b[a-z]/gi,
  last: /[a-z]\b/gi,
};

export function ChangeCasing({
  textContent,
  letterToChange,
  setTextContent,
}: ChangeCasingProps) {
  const [isChanged, setIsChanged] = useState<boolean>(false);
  const originalLetters = useRef(new Map<number, string>()); // This is to maintain charcters that were originally uppercase

  function applyTransformations() {
    const letterMatch = letterMatchRegex[letterToChange];
    const skipMapping = originalLetters.current.size > 0;
    const updatetdTextContent = textContent.replace(
      letterMatch,
      (letter, index: number) => {
        if (!skipMapping) originalLetters.current.set(index, letter);

        return isChanged
          ? (originalLetters.current.get(index) ?? letter.toLowerCase())
          : letter.toUpperCase();
      },
    );

    setTextContent(updatetdTextContent);
    setIsChanged((isChanged) => !isChanged);
  }

  return (
    <Button onClick={applyTransformations}>
      Make {letterToChange} letters uppercase
    </Button>
  );
}
