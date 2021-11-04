import "./AddNew.css";
import { useState } from "react";
import FileIcon from "./FileIcon";
interface Props {
  onEnter: (name: string, type: string) => void;
  placeholder: string;
}

export function AddNew(props: Props): JSX.Element {
  const [name, setName] = useState<string>("");
  let type: string;
  return (
    <div className="addNewContainer">
      <FileIcon type="other" />
      <input
        className="addNewInput"
        placeholder={props.placeholder}
        onChange={(e) => {
          setName(e.target.value);
        }}
        value={name}
        onKeyPress={(event) => {
          if (event.key === "Enter") {
            if (name.endsWith(".py")) type = "python";
            if (name.endsWith(".css")) type = "css";
            if (name.endsWith(".html")) type = "html";
            if (name.endsWith(".js")) type = "javascript";
            if (name.endsWith(".java")) type = "java";
            if (name.endsWith(".c")) type = "cpp";
            if (name.endsWith(".cpp")) type = "cpp";
            if (name.endsWith(".sass")) type = "sass";
            if (name.endsWith(".less")) type = "less";
            props.onEnter(name, type);
          }
        }}
      />
    </div>
  );
}
