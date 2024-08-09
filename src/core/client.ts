import axios, { AxiosInstance, AxiosResponse } from 'axios';
import { ApiEndpoints } from '../types/apiEndpoints';

class BloxyAPIClient {
    private client: AxiosInstance;

    constructor(baseURL: ApiEndpoints) {
        this.client = axios.create({
            baseURL,
        });
    }

    public async get(endpoint: string, params?: object): Promise<AxiosResponse> {
        try {
            return await this.client.get(endpoint, { params });
        } catch (error) {
            console.error('API request error:', error);
            throw error;
        }
    }
}

export default BloxyAPIClient;
