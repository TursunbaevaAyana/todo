import axios from "axios";

const instance = axios.create();
instance.defaults.baseURL = "https://tursunbaevaayana-todo.firebaseio.com";

export default instance;