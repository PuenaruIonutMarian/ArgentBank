import axiosInstance from '../../services/axiosInstance/axiosInstance';

/**
 * Effectue la connexion de l'utilisateur.
 * @param {Object} credentials - Les informations d'identification de l'utilisateur.
 * @param {string} credentials.email - L'email de l'utilisateur.
 * @param {string} credentials.password - Le mot de passe de l'utilisateur.
 * @returns {Promise<Object>} Les données de réponse de l'API, contenant le token d'authentification.
 * @throws {Error} Si une erreur se produit lors de la connexion.
 */
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
