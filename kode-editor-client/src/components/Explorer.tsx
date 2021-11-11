import "./Explorer.css";
import Files from "./Files";
import { VscNewFile } from "react-icons/vsc";
import { AddNew } from "./AddNew";
import { useState } from "react";
import Data from "../interfaces/data";

//Props interface (I <3 Typescript)
interface Props {
  projectName: string;
  selectedFile: string;
  projectFiles: Data
  onUpdateFile: (fileName: string) => void | undefined;
  onAddNewFile: (fileName: string, type: string) => void;
}

export default function Explorer(props: Props): JSX.Element {
  const [viewAddFile, setViewAddFile] = useState<any>(0);
  return (
    //Main Explorer Container
    <>
      {/* Top Tab That Shows Project name and Add File Button */}
      <div className="topTab bg-dark">
        <p className="projectName">{props.projectName}</p>
        <VscNewFile
          className="addFileButton"
          onClick={() => {
            setViewAddFile(!viewAddFile);
          }}
        />
      </div>

      {/* Create a new file Form */}

      <div>
        {viewAddFile ? (
          <AddNew
            placeholder="New File..."
            onEnter={(name, type) => {
              setViewAddFile(0);
              props.onAddNewFile(name, type);
            }}
          />
        ) : (
          ""
        )}
      </div>

      {/* Container that contains Files List */}
      <div>
        {Object.entries(props.projectFiles).map(([key, file]) => (
          <Files
            key={key}
            name={key}
            type={file.type}
            selected={`${props.selectedFile === key ? true : false}`}
            onUpdateFile={props.onUpdateFile}
          />
        ))}
      </div>
    </>
  );
}
