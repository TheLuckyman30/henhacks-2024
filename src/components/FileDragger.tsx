import { type DragEvent, useState } from "react";
import { useUserStore } from "@utils/user-store";
import "@css/FileDragger.css";

export function FileDragger() {
  const [isDragOver, setIsDragOver] = useState<boolean>(false);
  const setTextContent = useUserStore((s) => s.setTextContent);
  console.log("test");

  const handleDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragOver(false);

    const file = Array.from(e.dataTransfer.files)[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      if (typeof reader.result === "string") {
        const replaceLineBreaksRegEx = /[\r\n]+/gm;
        const extractedText = reader.result.replace(
          replaceLineBreaksRegEx,
          " ",
        );
        setTextContent(extractedText);
      }
    };

    reader.onerror = () => {
      console.error("There was an issue reading the file!");
    };

    reader.readAsText(file);
  };

  return (
    <div>
      <div
        onDragOver={(e) => {
          e.preventDefault();
          setIsDragOver(true);
        }}
        onDragLeave={(e) => {
          e.preventDefault();
          setIsDragOver(false);
        }}
        onDrop={handleDrop}
        className="file-box"
        style={{
          backgroundColor: isDragOver ? "lightgray" : "white",
        }}
      >
        Drag files
      </div>
    </div>
  );
}
