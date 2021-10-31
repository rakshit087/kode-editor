//Import Dependencies
import { useState, useEffect } from "react";
import MonacoEditor from "./components/MonacoEditor";
//Import Components
import Explorer from "./components/Explorer";
// import Terminal from "./components/Terminal";
import OutputWindow from "./components/OutputWindow";
//Import API Services
import Initialize from "./services/Initialize";
//Import Interfaces
import Theme from "./interfaces/theme";
//Import CSS
import "./App.css";


//The Theme For Project
const DraculaTheme : Theme = {
  bg: "#21222C",
  bgl: "#282a36",
  fg: "#F8F8F2",
  selection: "#44475A",
  comment: "#6272A4",
  cyan: "#8BE9FD",
  green: "#50FA7B",
  orange: "#FFB86C",
  pink: "#FF79C6",
  purple: "#BD93F9",
  red: "#FF5555",
  yellow: "#F1FA8C",
};

//Data Interface
interface Data {
  projects: {
    [key: string]: {
      files: {
        [key: string]: {
          type: string;
          content: string;
        };
      };
    };
  };
}

function App(): JSX.Element {
  const [theme, setTheme] = useState<Theme>(DraculaTheme);
  const [data, setData] = useState<any>({}); 

  //Get data from server
  Initialize.getData().then((res) => {
    console.log("hello",res.data);
    setData(res.data);
  });

  //Update default selected Project and file
  const [project, updateProject] = useState<string>(
    Object.keys(data.projects)[0]
  );
  const [file, updateFile] = useState<string>(
    Object.keys(data.projects[project].files)[0]
  );

  //Update Selected File
  const callUpdateFile = (fileName: string) => {
    updateFile(fileName);
  };

  //Update file's content
  const callUpdateData = (fileName: string, content: string) => {
    let tempData = data;
    tempData.projects[project].files[fileName].content = content;
    setData(tempData);
  };

  //Add a new file
  const callAddNewFile = (fileName: string, type: string) => {
    let tempData = data;
    tempData.projects[project].files[fileName] = {
      type: type,
      content: "",
    };
  };

  return (
    <div className="mainContainer">
      <div className="explorerContainer" style={{ backgroundColor: theme.bg }}>
        <Explorer
          theme={DraculaTheme}
          projectFiles={data.projects[project]}
          projectName={project}
          selectedFile={file}
          onUpdateFile={callUpdateFile}
          onAddNewFile={callAddNewFile}
        />
      </div>
      <div
        className="editorTerminalContainar"
        style={{ backgroundColor: theme.bgl }}
      >
        <MonacoEditor
          theme={DraculaTheme}
          type={data.projects[project].files[file].type}
          name={file}
          content={data.projects[project].files[file].content}
          onContentUpdate={callUpdateData}
        />
        {/* <Terminal /> */}
      </div>
      <div className="outputContainer">
        <OutputWindow />
      </div>
    </div>
  );
}

export default App;
