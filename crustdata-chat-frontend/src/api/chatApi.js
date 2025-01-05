import axios from "axios";

export const fetchChatResponse = async (question) => {
  try {
    const response = await axios.post("https://crustdata-backend.onrender.com/ask", { question });
    return response.data;
  } catch (error) {
    // Handle 404 specifically
    if (error.response && error.response.status === 404) {
      return { answer: "Sorry, I couldn't find an answer to your question." };
    }
    // Handle other errors
    throw new Error("An unexpected error occurred. Please try again later.");
  }
};
