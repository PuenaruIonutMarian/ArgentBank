import axiosInstance from '../../services/axiosInstance/axiosInstance';

const login = async ({ email, password }) => {
  try {
    const response = await axiosInstance.post('/user/login', { email, password });
    return response.data;
  } catch (error) {
    if (error.response && error.response.data) {
      throw new Error(error.response.data.message);
    }
    throw error;
  }
};

export { login };
