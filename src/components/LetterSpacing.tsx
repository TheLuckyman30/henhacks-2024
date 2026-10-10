import "../css/LetterSpacing.css";

interface LetterSpacingProps {
  setLetterSpacing: (newSpacing: number) => void;
}

export function LetterSpacing({ setLetterSpacing }: LetterSpacingProps) {
  return (
    <div>
      <label htmlFor="letter-spacing" className="input-label">
        Change Letter Spacing:
      </label>
      <input
        id="letter-spacing"
        type="number"
        name="Change Letter Spacing"
        onChange={(e) => setLetterSpacing(Number(e.target.value))}
      ></input>
    </div>
  );
}
