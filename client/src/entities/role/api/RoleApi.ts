import type { AxiosResponse } from 'axios';
import axiosInstance from '../../../services/apiAxiosInstance';
import { Roles } from '../types/roleType';

class RoleApi {
  static getAllRoles = async (): Promise<Roles[]> => {
    const response: AxiosResponse<Roles[]> = await axiosInstance.get('/roles');
    return response.data;
  };

  
  
}

export default RoleApi;
