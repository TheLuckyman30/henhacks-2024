import { DragEvent } from "react";

export interface DropFilesProps {
  isDragOver: boolean;
  setIsDragOver: (isDragOver: boolean) => void;
  setTextContnet: (newText: string) => void;
}

export function DropFile({
  isDragOver,
  setIsDragOver,
  setTextContnet,
}: DropFilesProps) {
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
        style={{
          margin: "auto",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "50px",
          width: "300px",
          border: "1px dotted",
          backgroundColor: isDragOver ? "lightgray" : "white",
          color: "black",
        }}
      >
        Drag files
      </div>
    </div>
  );
}
