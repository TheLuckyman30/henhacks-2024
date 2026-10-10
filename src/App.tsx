import {
  LetterSpacing,
  AddNewLine,
  RemoveLine,
  FileDragger,
  ChangeCasing,
  TextContent,
} from "@components";
import "@css/App.css";

function App() {
  return (
    <div className="main">
      <ChangeCasing letterToChange="first" />
      <ChangeCasing letterToChange="last" />
      <LetterSpacing />
      <AddNewLine />
      <RemoveLine />
      <FileDragger />
      <TextContent />
    </div>
  );
}
export default App;
