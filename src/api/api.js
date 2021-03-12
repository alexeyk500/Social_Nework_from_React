import * as axios from 'axios';

const instanceAxios = axios.create({
  baseURL: `https://social-network.samuraijs.com/api/1.0/`,
  withCredentials: true,
  headers:{'API-KEY': '973ba552-4a5a-4aa4-a0e4-1d88a4f3b86e'}
});

export const serverApi = {

  getUsers(pageNum, pageSize) {
    return instanceAxios.get(`users?page=${pageNum}&count=${pageSize}`)
    .then(response =>{
      return response.data
    })
  },

  followUser(userId) {
    return instanceAxios.post(`follow/${userId}`)
    .then(response =>{
      return response.data
    })
  },

  unfollowUser(userId) {
    return instanceAxios.delete(`follow/${userId}`)
    .then(response =>{
      return response.data
    })
  },

};
