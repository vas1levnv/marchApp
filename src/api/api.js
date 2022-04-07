import * as axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {'API-KEY': '1216c4b3-6d90-4cb9-9cc9-e623589f996a'}
})

export const userAPI = {
    getUsers(currentPage = 1, pageSize = 10){
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data)
    },
    follow(userId){
        return instance.post(`follow/${userId}`)
            .then(response => response.data)
    },
    unfollow(userId){
        return instance.delete(`follow/${userId}`)
            .then(response => response.data)
    },
    getProfile(userId){
        return instance.get(`profile/` + userId)
            .then(response => response.data)
    },
}

export const authAPI = {
    me(){
        return instance.get(`auth/me`)
            .then(response => response.data)
    },
}
