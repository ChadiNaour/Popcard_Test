import axios from "axios";

export default {
  init: function () {
    let baseURL = "https://mongodb.getpopcard.com/";
    return axios.create({
      baseURL,
      timeout: 31000
    });
  },
  General_stats: function (path, data) {
    return this.init().post(path,data);
  },
};