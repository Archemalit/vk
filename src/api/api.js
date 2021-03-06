import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL : 'https://social-network.samuraijs.com/api/1.0/',
    headers : {'API-KEY' : '634ed359-1333-46be-95d4-bc74f7dc5793'}
})



export const userAPI = {
  getUsers(current = 1, pageSize = 10) {
    return instance
      .get(`users?page=${current}&count=${pageSize}`)
      .then((response) => {
        return response.data;
      });
  },
  getFollowed(id) {
    return instance.post(`follow/${id}`).then((response) => {
      return response.data;
    });
  },
  getUnfollowed(id) {
    return instance.delete(`follow/${id}`).then((response) => {
      return response.data;
    });
  },
};



export const profileAPI = {
  getProfile (userId) {
    return instance.get(`profile/${userId}`);
  },
  getStatus (userId) {
    return instance.get(`profile/status/${userId}`)
  },
  updateStatus (status) {
    return instance.put(`profile/status`, {status : status})
  },

  savePhoto (photos) {
    const formData = new FormData();
    formData.append('image', photos)
    return instance.put(`profile/photo`, formData, {
      headers : {
        'Content-Type' : 'multipart/form-data'
      }
    });
  },

  saveProfile (profile) {
    return instance.put(`profile`, profile)
  },
};



export const authAPI = {
  getMe() {
    return instance.get(`auth/me`).then((response) => {
      return response.data;
    });
  },
  getMePhoto(id) {
    return instance.get(`profile/${id}`).then((response) => {
      return response.data.photos.small;
    });
  },
  login(email, password, rememberMe = false) {
    return instance.post(`auth/login`, {email, password, rememberMe})
  },
  logout() {
    return instance.delete(`auth/login`)
  }, 
}