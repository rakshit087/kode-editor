import Api from "./Api";
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
export default {
  getData() {
    return Api().get<Data>("initialize");
  },
};
