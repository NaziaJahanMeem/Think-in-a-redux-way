import axios from "../../utils/axios";

export const getBlogPosts = async (filter) => {
  let queryString = "";
  if (filter) {
    queryString = `?_sort=${filter}&_order=desc`;
  }
  const response = await axios.get(`/blogs${queryString}`);

  return response.data;
};
