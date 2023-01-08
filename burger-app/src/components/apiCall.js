import axios from "axios";

export const getPrices = async () => await axios.get("https://burger-api-xcwp.onrender.com/ingredients");    

export default getPrices;