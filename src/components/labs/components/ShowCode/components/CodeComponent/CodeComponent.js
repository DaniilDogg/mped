import SyntaxHighlighter from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { data } from "assets/solutionCode";
export default function CodeComponent({ id }) {
  const code = data[id];
  return (
    <SyntaxHighlighter children={code} language="javascript" style={dracula} />
  );
}
