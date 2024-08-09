import BloxyAPIClient from '../core/client';
import { API_ENDPOINTS } from '../types/apiEndpoints';

class GameAPI {
    private client: BloxyAPIClient;

    constructor() {
        this.client = new BloxyAPIClient(API_ENDPOINTS.GAME);
    }

    /**
     * In progress
     */
}

export default GameAPI;
