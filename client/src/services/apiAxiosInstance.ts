import type { AxiosError, AxiosInstance, InternalAxiosRequestConfig } from 'axios';
import axios from 'axios';
import type { User } from '../entities/user/types/userType';
import store from "../app/providers/store/store"
import { setAccessToken } from '../entities/user/model/userSlice';




type RetryConfig = {
  sent?: boolean;
} & InternalAxiosRequestConfig;

type TokensRefreshResponse = {
  accessToken: string;
  user: User; 
};

axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8';

const axiosInstance: AxiosInstance = axios.create({
  baseURL: '/api/',
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
});


axiosInstance.interceptors.request.use(
  (config: InternalAxiosRequestConfig): InternalAxiosRequestConfig => {
    if (!config.headers.Authorization) {
      const {accessToken} = store.getState().user;
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  },
);

axiosInstance.interceptors.response.use(
  (response) => response,
  async (error: AxiosError) => {
    const prevRequest: RetryConfig | undefined = error?.config;
    if (!prevRequest) {
      return Promise.reject(error);
    }
    if (error?.response?.status === 403 && !prevRequest.sent) {
      const response = await axios<TokensRefreshResponse>('/api/tokens/refresh');
      const newAccessToken = response.data.accessToken;
        setAccessToken(newAccessToken)
        prevRequest.sent = true;
        prevRequest.headers.Authorization = `Bearer ${newAccessToken}`;
        return axiosInstance(prevRequest);
      }
      return Promise.reject(error);
  },
);

export default axiosInstance;
export { setAccessToken };