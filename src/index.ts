import UserAPI from './api/user';
import GameAPI from './api/game';
import AssetsAPI from './api/assets';
import { API_ENDPOINTS } from './types/apiEndpoints';

class BloxApi {
    public user: UserAPI;
    public game: GameAPI;
    public assets: AssetsAPI;

    private static _config: { [key: string]: string } = {
        user: API_ENDPOINTS.USER,
        game: API_ENDPOINTS.GAME,
        assets: API_ENDPOINTS.ASSETS,
    };

    public static get config() {
        return this._config;
    }

    public static set config(newConfig: { [key: string]: string }) {
        this._config = { ...this._config, ...newConfig };
        this.updateAPIClients();
    }

    private static updateAPIClients() {
        this.userAPI = new UserAPI();
        this.gameAPI = new GameAPI();
        this.assetsAPI = new AssetsAPI();
    }

    constructor() {
        this.user = BloxApi.userAPI;
        this.game = BloxApi.gameAPI;
        this.assets = BloxApi.assetsAPI;
    }

    private static userAPI = new UserAPI();
    private static gameAPI = new GameAPI();
    private static assetsAPI = new AssetsAPI();
}

const bloxapi = new BloxApi();
export default bloxapi;