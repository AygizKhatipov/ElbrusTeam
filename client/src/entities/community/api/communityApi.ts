import type { AxiosResponse } from 'axios';
import axiosInstance from '../../../services/apiAxiosInstance';
import type {  CommunityType, PesonalCommunityType} from '../types/communityType';

class CommunityApi {
  static getAllTeachers = async (): Promise<PesonalCommunityType[]> => {
    const response: AxiosResponse<PesonalCommunityType[]> = await axiosInstance.get('/teachers');
    console.log(response.data)
    return response.data;
  };
}

export default CommunityApi;
