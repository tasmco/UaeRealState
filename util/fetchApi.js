import axios from "axios";

export const baseUrl = "https://bayut.p.rapidapi.com";

export const fetchApi = async (url) => {
  const { data } = await axios.get(url, {
    headers: {
      "x-rapidapi-host": "bayut.p.rapidapi.com",
      "x-rapidapi-key": "5a4edd5a77msh1a4c99faa01f6e7p14bae2jsnda656ca1cc5f",
    },
  });

  return data;
};
