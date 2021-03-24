import * as axios from 'axios';

const instanceAxios = axios.create({
  baseURL: `https://social-network.samuraijs.com/api/1.0/`,
  withCredentials: true,
  headers:{'API-KEY': '973ba552-4a5a-4aa4-a0e4-1d88a4f3b86e'}
});

export const serverApi = {

  authoraise_me() {
    return instanceAxios.get(`auth/me`)
    .then(response =>{
      return response.data
    })
  },

  login_me(email, password, rememberMe=false) {
    return instanceAxios.post(`auth/login`, {email, password, rememberMe})
    .then(response =>{
      return response.data
    })
  },

  logout_me() {
    return instanceAxios.delete(`auth/login`)
    .then(response =>{
      return response.data
    })
  },

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

  getProfile(userId) {
    return instanceAxios.get(`profile/${userId}`)
    .then(response =>{
      return(response.data);
    })
  },

  getStatus(userId) {
    return instanceAxios.get(`profile/status/${userId}`)
    .then(response =>{
      return(response.data);
    })
  },

  updateStatus(status) {
    return instanceAxios.put(`profile/status`,{status: status})
    .then(response =>{
      return(response.data);
    })
  },

};
