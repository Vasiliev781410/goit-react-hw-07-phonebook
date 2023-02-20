import axios from "axios";

export const apiContacts = axios.create({
  baseURL: "https://63f3284ade3a0b242b3bf3a0.mockapi.io/contacts",
});

export const getContacts = async () => {
  const { data } = await apiContacts.get("");
  return data;
};
export const getContactById = async (id) => {
  const { data } = await apiContacts.get(id);
  return data;
};

export const deleteContact = async (id) => {
  const { data } = await apiContacts.delete(id);
  return data;
};
