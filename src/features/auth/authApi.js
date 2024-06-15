import axiosInstance from '../../services/axiosInstance/axiosInstance';

const login = async ({ email, password }) => {
  try {
    const response = await axiosInstance.post('/user/login', { email, password });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export { login };
