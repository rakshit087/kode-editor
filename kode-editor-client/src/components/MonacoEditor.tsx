import Editor from "@monaco-editor/react";
import Theme from "../interfaces/theme";
import { RiSaveLine } from "react-icons/ri";
import "./MonacoEditor.css";

interface Props {
  theme: Theme;
  type: string;
  name: string;
  content: string;
  onContentUpdate: (fileName: string, content: string) => void;
}

export default function MonacoEditor(props: Props) {
  return (
    <>
      {/* Top Bar Containing Reformat Code and Save Icon */}
      <div className="topBar" style={{ backgroundColor: props.theme.bg }}>
        {/* <VscJson className="icon" onClick={() => {setFormat(!format)}} /> */}
        <RiSaveLine className="icon" />
      </div>
      <Editor
        theme="dracula"
        height="75%"
        width="100%"
        path={props.name}
        language={props.type}
        defaultValue={props.content}
        beforeMount={setEditorTheme}
        // onMount={formatCode}
        options={{
          minimap: {
            enabled: false,
          },
        }}
        onChange={(value, ev) => {
          props.onContentUpdate(props.name, value!);
        }}
      />
    </>
  );

  function formatCode(editor: any, monaco: any) {
    const handler = editor.onDidChangeModelDecorations((_: any) => {
      handler.dispose();
      editor.getAction("editor.action.formatDocument").run();
    });
  }

  //Setting Up Theme for Editor (Ugly Code!!)
  function setEditorTheme(monaco: any) {
    monaco.editor.defineTheme("dracula", {
      base: "vs-dark",
      inherit: true,
      //Defining Theme for the Editor (Using Dracula's Official Theme)
      rules: [
        {
          token: "comment",
          foreground: props.theme.comment,
          fontStyle: "italic",
        },
        { token: "constant", foreground: props.theme.purple },
        { token: "keyword", foreground: props.theme.pink },
        { token: "support", foreground: props.theme.cyan },
        { token: "punctuation", foreground: props.theme.pink },
        { token: "string", foreground: props.theme.yellow },
        { token: "variable", foreground: props.theme.fg },
        { token: "number", foreground: props.theme.purple },
        { token: "tag", foreground: props.theme.pink },
        { token: "attribute.name", foreground: props.theme.green },
        { token: "attribute.value", foreground: props.theme.yellow },
        { token: "identifier", foreground: props.theme.green },
      ],
      colors: {
        "editor.background": props.theme.bgl,
        "editor.foreground": props.theme.fg,
        "editorLineNumber.foreground": props.theme.comment,
        "editor.selectionBackground": props.theme.selection,
      },
    });
  }
}