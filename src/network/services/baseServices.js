import axios from 'axios';

export const baseServices = {};

baseServices.get = async (url, endpoint) => {
  let response = null;
  try {
    response = await axios.get(url + endpoint);
    return response;
  } catch (error) {
    console.error(
      `\nbaseService.get ${
        url + endpoint
      }\nerror: ${error}\nresponse: ${response}`,
    );
  }
};

baseServices.post = async (url, endpoint, data) => {
  let response = null;
  try {
    response = await axios.post(url + endpoint, data);
    return response;
  } catch (error) {
    console.error(
      `\nbaseService.post ${
        url + endpoint
      }\nerror: ${error}\nresponse: ${response}`,
    );
  }
};
