import BloxyAPIClient from '../core/client';
import { API_ENDPOINTS } from '../types/apiEndpoints';

class AssetsAPI {
    private client: BloxyAPIClient;

    constructor() {
        this.client = new BloxyAPIClient(API_ENDPOINTS.ASSETS);
    }

    /**
     * In progress
     */
}

export default AssetsAPI;
