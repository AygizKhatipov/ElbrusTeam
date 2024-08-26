import type { AxiosResponse } from 'axios';
import axiosInstance from '../../../services/apiAxiosInstance';
import type {  CommunityType, PesonalCommunityType, PesonalComType} from '../types/communityType';

class CommunityApi {
  static getAllTeachers = async (): Promise<PesonalComType[]> => {
    const response: AxiosResponse<PesonalComType[]> = await axiosInstance.get('/community/teachers');
    console.log(response.data)
    return response.data;
  };

  static getAllStudents = async (): Promise<PesonalComType[]> => {
    const response: AxiosResponse<PesonalComType[]> = await axiosInstance.get('/community/students');
    console.log(response.data)
    return response.data;
  };
  static getAllGraduates = async (): Promise<PesonalComType[]> => {
    const response: AxiosResponse<PesonalComType[]> = await axiosInstance.get('/community/graduates');
    console.log(response.data)
    return response.data;
  };
  static getAllCouches = async (): Promise<PesonalComType[]> => {
    const response: AxiosResponse<PesonalComType[]> = await axiosInstance.get('/community/couches');
    console.log(response.data)
    return response.data;
  };
}

export default CommunityApi;
