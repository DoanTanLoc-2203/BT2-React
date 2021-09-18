/** @format */

import axios from "axios";

const baseDomain = process.env.REACT_APP_BASE_URL;
const baseURL = `${baseDomain}`;

export default axios.create({
  baseURL,
});
