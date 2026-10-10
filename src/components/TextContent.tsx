import { useUserStore } from "@utils/user-store";
import "@css/TextContent.css";

export function TextContent() {
  const textContent = useUserStore((s) => s.textContent);
  const letterSpacing = useUserStore((s) => s.letterSpacing);

  return (
    <div className="text-content" style={{ letterSpacing }}>
      {textContent}
    </div>
  );
}
