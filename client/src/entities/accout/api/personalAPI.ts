import { AxiosResponse } from "axios";
import axiosInstance from "../../../services/apiAxiosInstance";
import { AccountType, PesonalPageType } from "../types/accountType";




class PersonalAPI { 
    static getAllAccounts = async (): Promise<PesonalPageType[]> => { 
        const response: AxiosResponse<PesonalPageType[]> = await axiosInstance.get('/users')
        return response.data
    }

    static getOneAccount = async (id: number): Promise<PesonalPageType> => {
        const response: AxiosResponse<PesonalPageType> = await axiosInstance.get(`/users/${id}`)
        return response.data
    }

    static updateAccount = async (data: any): Promise<PesonalPageType> => {
        const response: AxiosResponse<PesonalPageType> = await axiosInstance.put('/users', data)
        return response.data
    }

    static updateAvatar = async (formData: any): Promise<AccountType> => {
        const response: AxiosResponse<AccountType> = await axiosInstance.put('/upload/upload-avatar', formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        })
        return response.data
    }
}


export default PersonalAPI