import "@css/LetterSpacing.css";
import { useUserContext } from "@utils/user-context";

export function LetterSpacing() {
  const { setLetterSpacing } = useUserContext();

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
