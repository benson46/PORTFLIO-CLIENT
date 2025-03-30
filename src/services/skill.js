import { adminAxios } from "./axiosInstance";

export const skillsService = {
    getSkills: async () => {
      try {
        return await adminAxios.get('/api/skills/get-skills');
      } catch (error) {
        throw new Error(error.response?.data?.message || "Failed to get skills");
      }
    },
  
    addSkill: async (skillData) => {
      try {
        return await adminAxios.post('/api/skills/add-skills', skillData);
      } catch (error) {
        throw new Error(error.response?.data?.message || "Failed to add skill");
      }
    },
  
    updateSkill: async (id, updateData) => {
      try {
        return await adminAxios.patch(`/api/skills/edit-skills/${id}`, updateData);
      } catch (error) {
        throw new Error(error.response?.data?.message || "Failed to update skill");
      }
    },
  
    deleteSkill: async (id) => {
      try {
       return await adminAxios.delete(`/api/skills/delete-skills/${id}`);
      } catch (error) {
        throw new Error(error.response?.data?.message || "Failed to delete skill");
      }
    }
  };