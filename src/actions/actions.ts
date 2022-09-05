import axios from "axios";
import Swal from "sweetalert2";

const BASE_URL = `${import.meta.env.VITE_URI_SERVICE}`;
const API_URL = `${BASE_URL}${import.meta.env.VITE_API_SERVICE_VERSION}`;
const API_CONFIG = `${BASE_URL}${import.meta.env.VITE_API_SERVICE_CONFIG}`;
export const http = axios.create({
  baseURL: API_URL,
});
export const httpConfig = axios.create({
  baseURL: API_CONFIG,
});

export const create_register = async (values: any) => {
  console.log("create register");
  try {
    const URI = "/blood";
    const res: any = await http.post(URI, values);
    await Swal.fire({
      icon: "success",
      title: "Creado correctamente",
      showConfirmButton: false,
      timer: 1500,
    });
    return res.data;
  } catch (error) {
    await Swal.fire({
      icon: "error",
      title: "Algo salio mal",
      text: "Vuelve a intentarlo",
    });
    return Promise.reject(error);
  }
};

export const get_register = async (id: string) => {
  console.log("get register");
  try {
    const URI = `/blood/${id}`;
    const res: any = await http.get(URI);
    return res.data;
  } catch (error) {
    return Promise.reject(error);
  }
};

export const update_register = async (id: string, values: any) => {
  delete values.status;
  try {
    const URI = `/blood/${id}`;
    const res: any = await http.put(URI, values);
    await Swal.fire({
      icon: "success",
      title: "Editado correctamente",
      showConfirmButton: false,
      timer: 1500,
    });
    return res.data;
  } catch (error) {
    await Swal.fire({
      icon: "error",
      title: "Algo salio mal",
      text: "Vuelve a intentarlo",
    });
    return Promise.reject(error);
  }
};

export const list_register = async () => {
  console.log("list register");
  try {
    const URI = `/blood/`;
    const res: any = await http.get(URI);
    return res.data;
  } catch (error) {
    return Promise.reject(error);
  }
};

export const delete_register = async (id: string) => {
  console.log("delete register");
  try {
    const URI = `/blood/${id}`;
    const res: any = await http.delete(URI);
    await Swal.fire({
      icon: "success",
      title: "Eliminado correctamente",
      showConfirmButton: false,
      timer: 1500,
    });
    return res.data;
  } catch (error) {
    await Swal.fire({
      icon: "error",
      title: "Algo salio mal",
      text: "Vuelve a intentarlo",
    });
    return Promise.reject(error);
  }
};

export const create_rule = async (values: any) => {
  try {
    const URI = "/rules";
    const res: any = await httpConfig.post(URI, values);
    await Swal.fire({
      icon: "success",
      title: "Creado correctamente",
      showConfirmButton: false,
      timer: 1500,
    });
    return res.data;
  } catch (error) {
    await Swal.fire({
      icon: "error",
      title: "Algo salio mal",
      text: "Vuelve a intentarlo",
    });
    return Promise.reject(error);
  }
};

export const get_rule = async (id: string) => {
  console.log("get rule");
  try {
    const URI = `/rules/${id}`;
    const res: any = await httpConfig.get(URI);
    return res.data;
  } catch (error) {
    return Promise.reject(error);
  }
};

export const list_rule = async () => {
  console.log("list rule");
  try {
    const URI = `/rules/`;
    const res: any = await httpConfig.get(URI);
    return res.data;
  } catch (error) {
    return Promise.reject(error);
  }
};

export const update_rule = async (id: string, values: any) => {
  console.log("update rule");
  try {
    const URI = `/rule/${id}`;
    const res: any = await httpConfig.put(URI, values);
    await Swal.fire({
      icon: "success",
      title: "Editado correctamente",
      showConfirmButton: false,
      timer: 1500,
    });
    return res.data;
  } catch (error) {
    await Swal.fire({
      icon: "error",
      title: "Algo salio mal",
      text: "Vuelve a intentarlo",
    });
    return Promise.reject(error);
  }
};

export const delete_rule = async (id: string) => {
  console.log("delete rule");
  try {
    const URI = `/rule/${id}`;
    const res: any = await httpConfig.delete(URI);
    await Swal.fire({
      icon: "success",
      title: "Eliminado correctamente",
      showConfirmButton: false,
      timer: 1500,
    });
    return res.data;
  } catch (error) {
    await Swal.fire({
      icon: "error",
      title: "Algo salio mal",
      text: "Vuelve a intentarlo",
    });
    return Promise.reject(error);
  }
};
