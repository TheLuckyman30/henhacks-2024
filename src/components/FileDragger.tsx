import { type DragEvent, useState } from "react";
import "@css/FileDragger.css";

export interface FileDraggerProps {
  setTextContnet: (newText: string) => void;
}

export function FileDragger({ setTextContnet }: FileDraggerProps) {
  const [isDragOver, setIsDragOver] = useState<boolean>(false);

  function handleDragOver(event: DragEvent<HTMLDivElement>): void {
    event.preventDefault();
    setIsDragOver(true);
  }

  function handleDragLeave(event: DragEvent<HTMLDivElement>): void {
    event.preventDefault();
    setIsDragOver(false);
  }

  function handleDrop(event: DragEvent<HTMLDivElement>): void {
    event.preventDefault();
    setIsDragOver(false);

    const userFiles = Array.from(event.dataTransfer.files);

    let extractedText: string = "";

    userFiles.forEach((file: File) => {
      const reader = new FileReader();

      reader.onloadend = () => {
        if (typeof reader.result === "string") {
          const removedLineBreaks = reader.result.replace(/[\r\n]+/gm, " ");
          extractedText += removedLineBreaks.split(".").join(".\n");
          setTextContnet(extractedText);
        }
      };

      reader.onerror = () => {
        console.error("There was an issue.");
      };

      reader.readAsText(file);
      return reader;
    });
  }

  return (
    <div>
      <div
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
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
