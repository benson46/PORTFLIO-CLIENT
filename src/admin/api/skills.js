import { adminAxios } from '../../lib/api/adminAxios';

export const skillsService = {
  async getSkills() {
    const { data } = await adminAxios.get('/skills');
    return data;
  },
  
  async createSkill(skillData) {
    const { data } = await adminAxios.post('/skills', skillData);
    return data;
  },

  async updateSkill(id, updates) {
    const { data } = await adminAxios.patch(`/skills/${id}`, updates);
    return data;
  },

  async deleteSkill(id) {
    const { data } = await adminAxios.delete(`/skills/${id}`);
    return data;
  }
};