import type { AxiosResponse } from 'axios';
import axiosInstance from '../../../services/apiAxiosInstance';
import { Points, PointsWithoutId } from '../type/pointType';

class PointApi {
  static getAllPoints = async (): Promise<Points[]> => {
    const response: AxiosResponse<Points[]> = await axiosInstance.get('/points');
    return response.data;
  };

  static deletePoint = async (id: number): Promise<boolean> => {
    const response: AxiosResponse<{ message: string }> = await axiosInstance.delete(`/points/${id}`);
    return response.status === 200;
  };
  static updatePoint = async ({id, form}:
    {id: number,
    form:  PointsWithoutId},
  ): Promise<Points> => {
    const response = await axiosInstance.put<Points>(`/points/${id}`, form);
    return response.data;
  };

}

export default PointApi;
