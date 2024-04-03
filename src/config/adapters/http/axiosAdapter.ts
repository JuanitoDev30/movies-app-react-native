import axios, {AxiosInstance} from 'axios';
import {HttpAdapter} from './httpAdapter';

interface Options {
  baseUrl: string;
  params: Record<string, string>;
}

export class AxiosAdapter implements HttpAdapter {
  private axiosInstance: AxiosInstance;
  constructor(options: Options) {
    this.axiosInstance = axios.create({
      baseURL: options.baseUrl,
      params: options.params,
    });
  }
  // ...
  async get<T>(
    url: string,
    options?: Record<string, unknown> | undefined,
  ): Promise<T> {
    try {
      // Se hace la petición GET con axios
      const {data} = await this.axiosInstance.get<T>(url, options);
      return data;
      // Se retorna la respuesta
    } catch (error) {
      throw new Error(`Error en la petición GET${url}`);
    }
  }
  // ...
}
