import type { AxiosResponse } from 'axios';
import axiosInstance from '../../../services/apiAxiosInstance';
import type { PesonalCommunityType} from '../types/baseDatesType'; //ИСПРАВИТЬ!!!

class baseDatesApi {
  static getAllBaseDates = async (): Promise<PesonalCommunityType[]> => {
    const response: AxiosResponse<PesonalCommunityType[]> = await axiosInstance.get('/basedates');
    return response.data;
  };
}

export default baseDatesApi;

