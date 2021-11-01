import Api from "./Api";
import Data from "../interfaces/data";

export default {
  getData() {
    return Api().get<Data>("initialize");
  },
};
