import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "0b7da708beaf4170862112ef671c2c34",
  },
});
