import axios from "axios";

const BASE_URL = `${import.meta.env.VITE_URI_SERVICE}`;
const API_URL = `${BASE_URL}${import.meta.env.VITE_API_SERVICE_VERSION}`;

export const http = axios.create({
  baseURL: API_URL,
});

export const create_register = async (values: any) => {
  try {
    const URI = "/blood";
    const res: any = await http.post(URI, values);
    return res.data.data;
  } catch (error) {
    return Promise.reject(error);
  }
};

export const get_register = async (id: string) => {
  try {
    const URI = `/blood/${id}`;
    const res: any = await http.get(URI);
    return res.data.data;
  } catch (error) {
    return Promise.reject(error);
  }
};

export const update_register = async (id: string, values: any) => {
  try {
    const URI = `/blood/${id}`;
    const res: any = await http.post(URI, values);
    return res.data.data;
  } catch (error) {
    return Promise.reject(error);
  }
};

export const list_register = async () => {
  try {
    const URI = `/blood/`;
    const res: any = await http.get(URI);
    return res.data.data;
  } catch (error) {
    return Promise.reject(error);
  }
};

export const delete_register = async (id: string) => {
  try {
    const URI = `/blood/${id}`;
    const res: any = await http.delete(URI);
    return res.data.data;
  } catch (error) {
    return Promise.reject(error);
  }
};
