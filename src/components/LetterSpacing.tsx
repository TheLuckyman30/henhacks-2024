import "@css/LetterSpacing.css";
import { useUserStore } from "@utils/user-store";

export function LetterSpacing() {
  const setLetterSpacing = useUserStore((s) => s.setLetterSpacing);

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
