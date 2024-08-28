import type { AxiosResponse } from 'axios';
import axiosInstance from '../../../services/apiAxiosInstance';
import type { PesonalCommunityType} from '../types/eventsType'; //ИСПРАВИТЬ!!!

class eventsApi {
  static getAllEvents = async (): Promise<PesonalCommunityType[]> => {
    const response: AxiosResponse<PesonalCommunityType[]> = await axiosInstance.get('/events');
    return response.data;
  };
}

export default eventsApi;
