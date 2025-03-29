import { adminAxios } from "./axiosInstance";

export const authService = {
  login: async (credentials) => {
    try {
      const response = await adminAxios.post(
        "/api/auth/login",
        credentials,
        { withCredentials: true }
      );
      if (response.success) {
        localStorage.setItem("access_token", response.access_token);
      }
      return response;
    } catch (error) {
      throw new Error(error.message || "Login failed");
    }
  },

  logout: async () => {
    try {
      const response = await adminAxios.post("/api/auth/logout", {
        withCredentials: true,
      });
      console.log(response)
      if (response.success) {
        localStorage.removeItem("access_token");
      }
      return response;
    } catch (error) {
      throw new Error(error.message || "Logout failed");
    }
  },
};
