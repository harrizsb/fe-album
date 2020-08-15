import { apiUrl } from "./config";
import axios from "axios";

export const fetchPhotos = async (data) => {
  try {
    const res = axios.post(`${apiUrl}/list`, data);
    return res;
  } catch (err) {
    return err;
  }
};

export const deletePhoto = async (album, filename) => {
  try {
    const res = axios.delete(`${apiUrl}/${album.toLowerCase()}/${filename}`);
    return res;
  } catch (err) {
    return err;
  }
};
