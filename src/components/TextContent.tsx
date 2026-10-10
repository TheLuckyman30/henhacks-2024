import { useUserContext } from "@utils/user-context";
import "@css/TextContent.css";

export function TextContent() {
  const { textContent, letterSpacing } = useUserContext();

  return (
    <div className="text-content" style={{ letterSpacing }}>
      {textContent}
    </div>
  );
}
