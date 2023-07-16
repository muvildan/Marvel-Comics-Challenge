import http from "../http-common";
import { MarvelApiResponse } from "../types/API";



// Method to get response from the API
const getResponse = (pagination: number) => {
    return http.get<MarvelApiResponse>('/characters', {
      params: {
        offset: pagination * 12
      }
    });
  };

// Object containing all API call methods
const APIService = {
    getResponse
};

export default APIService;