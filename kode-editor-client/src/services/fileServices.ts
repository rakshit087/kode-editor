import Api from "./Api";
import Data from "../interfaces/data";

export default {
  getFiles() {
    return Api().get<Data>("/files");
  },
  postFiles(data: Data) {
    return Api().post<Data>("/files", data);
  },
};
