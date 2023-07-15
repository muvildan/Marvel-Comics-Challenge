import http from "../http-common";
import { MarvelApiResponse } from "../types/API";


// Method to get response from the API
const getResponse = () => {
    return http.get<MarvelApiResponse>("");
  };

// Object containing all API call methods
const APIService = {
    getResponse
};

export default APIService;