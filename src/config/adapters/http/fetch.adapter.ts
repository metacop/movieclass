import {HttpAdapter} from './http.adapter';

//! CREAMOS UN ADAPTADOR FETCH QUE IMPLEMENTA LA INTERFAZ DE HTTPADAPTER.

type FetchAdapterConfig = {
  baseUrl: string;
  params?: Record<string, string>;
};

export class FetchAdapter implements HttpAdapter {
  private baseUrl: string;
  private params: Record<string, string>;

  constructor(config: FetchAdapterConfig) {
    this.baseUrl = config.baseUrl;
    this.params = config.params || {};
  }

  async get(endpoint: string, options: RequestInit = {}): Promise<any> {
    const url = new URL(endpoint, this.baseUrl);
    Object.keys(this.params).forEach(key =>
      url.searchParams.append(key, this.params[key]),
    );

    const response = await fetch(url.toString(), options);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
  }
}
