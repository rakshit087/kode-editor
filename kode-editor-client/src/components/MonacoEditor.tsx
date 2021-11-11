import Editor from "@monaco-editor/react";
import { RiSaveLine } from "react-icons/ri";

interface Props {
  type: string;
  name: string;
  content: string;
  onContentUpdate: (fileName: string, content: string) => void;
}

export default function MonacoEditor(props: Props) {
  return (
    <>
      {/* Top Bar Containing Reformat Code and Save Icon */}
      <div className="flex flex-row-reverse items-center px-3 h-8 text-offwhite text-lg">
        <RiSaveLine className="hover:text-green transition-color duration-150" />
      </div>
      <Editor
        theme="onedark"
        height="75%"
        width="100%"
        path={props.name}
        language={props.type}
        defaultValue={props.content}
        beforeMount={setEditorTheme}
        onMount={formatCode}
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
    monaco.editor.defineTheme("onedark", {
      base: "vs-dark",
      inherit: true,
      //Defining Theme for the Editor (Using Dracula's Official Theme)
      rules: [
        {
          token: "comment",
          foreground: '#5d7988',
          fontStyle: "italic",
        },
        { token: "constant", foreground: 'e06c75' },
        { token: "keyword", foreground: '#c678dd' },
        { token: "support", foreground:  '#56b6c2'},
        { token: "punctuation", foreground: 'abb2bf' },
        { token: "string", foreground: '#98c379' },
        { token: "variable", foreground: '#e5c07b' },
        { token: "number", foreground: '#e5c07b' },
        { token: "tag", foreground: '#e06c75' },
        { token: "attribute.name", foreground: '#e06c75' },
        { token: "attribute.value", foreground: '#98c379'},
        { token: "identifier", foreground: '#61afef' },
      ],
      colors: {
        "editor.background": '#282c34',
        "editor.foreground": '#abb2bf',
        "editorLineNumber.foreground": '#5d7988',
        "editor.selectionBackground": '#363a46',
      },
    });
  }
}