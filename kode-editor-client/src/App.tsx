//Import Dependencies
import { useState, useEffect } from "react";
//Import Components
import Explorer from "./components/Explorer";
import TopBar from "./components/TopBar";
import MonacoEditor from "./components/MonacoEditor";
// import Terminal from "./components/Terminal";
import OutputWindow from "./components/OutputWindow";
//Import API Services
import fileServices from "./services/fileServices";
//Import Interfaces
import Data from "./interfaces/data";

function App(): JSX.Element {
  const [data, setData] = useState<Data>({
    "script.js": {
      type: "javascript",
      content: "",
    },
  });
  const [refresh, setRefresh] = useState<number>(0);

  //Get data from server
  useEffect(() => {
    fileServices.getFiles().then((res) => {
      setData(res.data);
    });
  }, []);

  const [selectedFile, setSelectedFile] = useState<string>("script.js");

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
        <TopBar
          data={data}
          callSetData={setData}
          callRefresh={setRefresh}
          refresh={refresh}
        />
        <MonacoEditor
          type={data[selectedFile].type}
          name={selectedFile}
          content={data[selectedFile].content}
          onContentUpdate={callUpdateData}
        />
        {/* <Terminal /> */}
      </div>
      <div className="w-1/3">
        <OutputWindow key={refresh} />
      </div>
    </div>
  );
}

export default App;
