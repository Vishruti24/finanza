import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:1337/api",
});

export const getCarousels = () =>
  API.get("/carousels?populate=*");

export const getAbout = () =>
  API.get("/abouts?populate=*");

export const getServices = () =>
  API.get("/services?populate=*");

export const getProjects = () =>
  API.get("/projects?populate=*");

export const getFooter = () =>
  API.get("/footers");

export const createContact = (data) =>
  API.post("/contacts", { data });