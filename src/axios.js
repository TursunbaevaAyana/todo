import axios from "axios";

const instance = axios.create();
instance.defaults.baseUrl = "https://tursunbaevaayana-todo.firebaseio.com/";

export default instance;