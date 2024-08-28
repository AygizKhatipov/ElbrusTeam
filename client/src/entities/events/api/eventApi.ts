import type { AxiosResponse } from 'axios';
import axiosInstance from '../../../services/apiAxiosInstance';
import type { EventsType} from '../types/eventsType'; 

class eventApi {
  static getAllEvents = async (): Promise<EventsType[]> => {
    const response: AxiosResponse<EventsType[]> = await axiosInstance.get('/events');
    console.log('events', response.data);
    
    return response.data;
  };
}

export default eventApi;
