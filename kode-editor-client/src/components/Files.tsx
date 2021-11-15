import FileIcon from "./FileIcon";

interface Props {
  name: string;
  type: string;
  selected: string;
  onUpdateFile: (fileName: string) => void | undefined;
}

export default function Files(props: Props): JSX.Element {
  return (
    <div
      className={`flex items-center px-3 py-1 m-auto text-sm text-offwhite cursor-pointer 
        ${props.selected === "true" ? "bg-opacity-10 bg-offwhite" : ""}
      `}
      onClick={() => {
        props.onUpdateFile(props.name);
      }}
    >
      <FileIcon type={props.type} />
      <p>{props.name}</p>
    </div>
  );
}
