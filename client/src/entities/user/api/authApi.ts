import axiosInstance from "../../../services/apiAxiosInstance"
import {  LoginFormType, User, userWithoutConfirmPassword } from "../types/userType"





class AuthApi {

    static refreshTokens = async (): Promise<{ user: User; accessToken: string }> => {
        const response = await axiosInstance.get('/tokens/refresh');
        return response.data;
      };

    static registration = async (data: userWithoutConfirmPassword): Promise<{user: User, accessToken: string}> => {
        const response = await axiosInstance.post<{user: User, accessToken: string}>('/auth/registration', data);
        return response.data
    }


    static login = async (data: LoginFormType): Promise<{user: User, accessToken: string}> => {
        const response = await axiosInstance.post<{user: User, accessToken: string}>('/auth/authorization', data);
        return response.data
    }

    static logout = async (): Promise<boolean> => {
        const response = await axiosInstance.post('/auth/logout');
        return response.status === 200
    }
}


export default AuthApi
