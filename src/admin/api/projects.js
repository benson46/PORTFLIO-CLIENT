import { adminAxios } from '../../lib/api/adminAxios'

export const projectsService = {
  async getProjects() {
    const { data } = await adminAxios.get('/projects')
    return data
  },

  async createProject(projectData) {
    const { data } = await adminAxios.post('/projects', projectData)
    return data
  },

  async updateProject(id, updates) {
    const { data } = await adminAxios.patch(`/projects/${id}`, updates)
    return data
  },

  async deleteProject(id) {
    const { data } = await adminAxios.delete(`/projects/${id}`)
    return data
  },

  async uploadImage(imageFile) {
    const formData = new FormData()
    formData.append('image', imageFile)
    const { data } = await adminAxios.post('/projects/upload', formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
    return data
  }
}