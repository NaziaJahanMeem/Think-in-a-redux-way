import axios from "../../utils/axios";

export const updateLike = async (id, like) => {
  const response = await axios.patch(`/blogs/${id}`, { likes: like });

  return response.data;
};
