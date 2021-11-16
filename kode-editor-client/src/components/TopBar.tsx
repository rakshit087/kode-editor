//Import Components
import { RiSaveLine } from "react-icons/ri";
//Import Interfaces
import Data from "../interfaces/data";
//Import Services
import fileServices from "../services/fileServices";

interface Props {
  data: Data;
  callSetData: (data: Data) => void | undefined;
  refresh: number;
  callRefresh: (refresh: number) => void | undefined;
}

export default function TopBar(props: Props): JSX.Element {
  const handleClick = async () => {
    await fileServices.postFiles(props.data);
    setTimeout(() => {
      props.callRefresh(props.refresh + 1);
    }, 1500);
  };
  return (
    <div className="flex flex-row-reverse items-center px-3 h-8 text-offwhite text-lg bg-dark">
      <RiSaveLine
        className="cursor-pointer hover:text-green transition-color duration-150"
        onClick={handleClick}
      />
    </div>
  );
}
