//Import Dependencies
import { useState, useEffect } from "react";
import MonacoEditor from "./components/MonacoEditor";
//Import Components
import Explorer from "./components/Explorer";
// import Terminal from "./components/Terminal";
import OutputWindow from "./components/OutputWindow";
//Import API Services
import fileServices from "./services/fileServices";
//Import Interfaces
import Data from "./interfaces/data";

function App(): JSX.Element {
  const [data, setData] = useState<Data>({
    "index.html": {
      type: "html",
      content: "",
    },
  });

  //Get data from server
  useEffect(() => {
    fileServices.getFiles().then((res) => {
      console.log(res.data["index.html"].content);
      setData(res.data);
    });
  }, []);

  const [selectedFile, setSelectedFile] = useState<string>("index.html");

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
      <div className="h-screen w-1/6 bg-darkest">
        <Explorer
          projectFiles={data}
          projectName="EXPLORER"
          selectedFile={selectedFile}
          onUpdateFile={callUpdateFile}
          onAddNewFile={callAddNewFile}
        />
      </div>
      <div className="bg-dark w-1/2">
        <MonacoEditor
          type={data[selectedFile].type}
          name={selectedFile}
          content={data[selectedFile].content}
          onContentUpdate={callUpdateData}
        />
        {/* <Terminal /> */}
      </div>
      <div className="w-1/3">
        <OutputWindow />
      </div>
    </div>
  );
}

export default App;
