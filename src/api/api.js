import axios from "axios";

export default {
  init: function () {
    let baseURL = process.env.REACT_APP_API_URL;
    let headers = {
      "test-user": "chadi",
    };
    return axios.create({
      baseURL,
      timeout: 31000,
      headers
    });
  },
  Post: function (path, data) {
    return this.init().post(path,data);
  },
};