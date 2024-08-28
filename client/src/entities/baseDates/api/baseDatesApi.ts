import type { AxiosResponse } from 'axios';
import axiosInstance from '../../../services/apiAxiosInstance';
import type { BaseDatesType} from '../types/baseDatesType'; //ИСПРАВИТЬ!!!

class baseDatesApi {
  static getAllBaseDates = async (): Promise<BaseDatesType[]> => {
    const response: AxiosResponse<BaseDatesType[]> = await axiosInstance.get('/basedates');
    return response.data;
  };
}

export default baseDatesApi;

