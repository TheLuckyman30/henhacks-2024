import { useState, type RefObject } from "react";
import { useUserStore } from "@utils/user-store";
import { Button } from "./Button";

interface ChangeCasingProps {
  letterToChange: "first" | "last";
  ref: RefObject<Map<number, string>>;
}

const letterMatchRegex: Record<string, RegExp> = {
  first: /\b[a-z]/gi,
  last: /[a-z]\b/gi,
};

export function ChangeCasing({ letterToChange, ref }: ChangeCasingProps) {
  const [isChanged, setIsChanged] = useState<boolean>(false);
  const textContent = useUserStore((s) => s.textContent);
  const setTextContent = useUserStore((s) => s.setTextContent);

  function applyTransformations() {
    const letterMatch = letterMatchRegex[letterToChange];
    const skipMapping = ref.current.size > 0;

    const updatetdTextContent = textContent.replace(
      letterMatch,
      (letter, index: number) => {
        if (!skipMapping) ref.current.set(index, letter);

        return isChanged
          ? (ref.current.get(index) ?? letter.toLowerCase())
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
