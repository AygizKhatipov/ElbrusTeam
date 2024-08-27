import { AxiosResponse } from "axios"
import axiosInstance from "../../../services/apiAxiosInstance"
import { ChatType } from "../types/chatType"






class ChatApi {
    static getAllMessages = async (): Promise<ChatType[]> => {
        const response: AxiosResponse<ChatType[]> = await axiosInstance.get('/chat')
        console.log(response.data)
        return response.data
    }
}




export default ChatApi