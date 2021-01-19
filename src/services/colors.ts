import axios, { AxiosPromise } from "axios";

import config from "config";

export const fetchColors = (): AxiosPromise<Array<any>> => {
  return axios.get(`${config.apiBaseUrl}/api/v1/colors`);
};
