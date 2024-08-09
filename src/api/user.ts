import BloxyAPIClient from '../core/client';
import { API_ENDPOINTS } from '../types/apiEndpoints';

class UserAPI {
    private client: BloxyAPIClient;

    constructor() {
        this.client = new BloxyAPIClient(API_ENDPOINTS.USER);
    }

    public async info(userId: number): Promise<any> {
        try {
            const response = await this.client.get(`${API_ENDPOINTS.USER}/v1/users/${userId}`);
            return response.data;
        } catch (error) {
            console.error('Error fetching user info:', error);
            throw error;
        }
    }

    public async idToUsername(userId: number): Promise<string> {
        try {
            const response = await this.client.get(`${API_ENDPOINTS.USER}/v1/users/${userId}`);
            return response.data.username;
        } catch (error) {
            console.error('Error fetching username from user ID:', error);
            throw error;
        }
    }
}

export default UserAPI;
