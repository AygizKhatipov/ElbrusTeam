import type { AxiosResponse } from 'axios';
import axiosInstance from '../../../services/apiAxiosInstance';
import type { PesonalCommunityType} from '../types/eventsType'; 

class eventsApi {
  static getAllEvents = async (): Promise<PesonalCommunityType[]> => {
    const response: AxiosResponse<PesonalCommunityType[]> = await axiosInstance.get('/events');
    console.log('events', response.data);
    
    return response.data;
  };
}

export default eventsApi;
