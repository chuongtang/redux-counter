import axios from 'axios';

 export const getStore = async () => {
    try {
      const response = await axios.get("/stores");
      console.log(response);
    //   const storeList = await reponse.json(); /// Axios library returns a data object that has already been parsed to JSON:
      return response;
    } catch (error) {
      console.log(error.message);
    }
 };