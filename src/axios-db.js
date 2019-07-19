import axios from "axios";

const instance = axios.create({

  baseURL: "https://tap-room-38454.firebaseio.com"
});

export default instance;
