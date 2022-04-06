import * as axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {'API-KEY': '1216c4b3-6d90-4cb9-9cc9-e623589f996a'}
})

export const getUserAPI = {
    getUsers(currentPage = 1, pageSize = 10){
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data)
    },
    getProfile(userId = 1,){
        return instance.get(`profile/` + userId)
            .then(response => response.data)
    },
    followDAL(id = 1){
        return instance.post(`follow/${id}`)
            .then(response => response.data)
    },
    unfollowDAL(id = 1){
        return instance.delete(`follow/${id}`)
            .then(response => response.data)
    },
}