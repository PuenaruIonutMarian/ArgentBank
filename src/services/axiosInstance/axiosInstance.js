import axios from 'axios';

/**
 * Crée une instance d'Axios avec une URL de base prédéfinie.
 * @constant
 * @type {AxiosInstance}
 */
const axiosInstance = axios.create({
  baseURL: 'http://localhost:3001/api/v1',
});

export default axiosInstance;
