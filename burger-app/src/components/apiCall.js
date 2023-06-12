import axios from "axios";

export const getPrices = async () => await axios.get("https://burger-api-xcwp.onrender.com/ingredients"); 

export const getDataIngredient = async () => {
    try {
      const response = await axios.get('https://burger-api-xcwp.onrender.com/ingredients');
      return response.data;
    } catch (error) {
      console.error(error);
    } 
  };

