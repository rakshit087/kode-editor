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
import Data from "./interfaces/data";
//Import CSS
import "./App.css";

function App(): JSX.Element {
  const [data, setData] = useState<Data>({
    'app.js': {
      type: 'javascript',
      content: ''
    }
  });

  //Get data from server
  useEffect(() => {
    Initialize.getData().then((res) => {
      setData(res.data);
      console.log(res);
    });
  }, []);

  const [selectedFile, setSelectedFile] = useState<string>('app.js');

  //Update Selected File
  const callUpdateFile = (fileName: string) => {
    setSelectedFile(fileName);
  };

  //Update file's content
  const callUpdateData = (fileName: string, content: string) => {
    let tempData = data;
    tempData[fileName].content = content;
    setData(tempData);
  };

  //Add a new file
  const callAddNewFile = (fileName: string, type: string) => {
    let tempData = data;
    tempData[fileName] = {
      type: type,
      content: "",
    };
  };
  return (
    <div className="flex">
      <div className="explorerContainer bg-bg">
        <Explorer
          projectFiles={data}
          projectName="My Project"
          selectedFile={selectedFile}
          onUpdateFile={callUpdateFile}
          onAddNewFile={callAddNewFile}
        />
      </div>
      <div
        className="editorTerminalContainar bg-bg"
      >
        <MonacoEditor
          type={data[selectedFile].type}
          name={selectedFile}
          content={data[selectedFile].content}
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
