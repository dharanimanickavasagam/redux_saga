import axios from "axios";

export const getPostService = async arg => {
  const { data } = await axios.get(
    "https://jsonplaceholder.typicode.com/posts"
  );
  console.log("Demonstrates that args can be pased :", arg);
  return data;
};
