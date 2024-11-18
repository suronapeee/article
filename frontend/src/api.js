// Import axios for making HTTP requests
import axios from "axios";
// Define the default API endpoint for axios if an environment variable is not provided
const apiUrl = "/choreo-apis/awbo/backend/rest-api-be2/v1.0";
// Create an instance of axios with a base URL, defaulting to VITE_API_URL from environment variables if available
const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL ? import.meta.env.VITE_API_URL : apiUrl,
});
// Export the configured api instance to be used throughout the application for API requests
export default api;

