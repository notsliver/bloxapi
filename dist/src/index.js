"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AssetsAPI = exports.GameAPI = exports.UserAPI = exports.BloxyAPI = void 0;
const user_1 = __importDefault(require("./api/user"));
exports.UserAPI = user_1.default;
const game_1 = __importDefault(require("./api/game"));
exports.GameAPI = game_1.default;
const assets_1 = __importDefault(require("./api/assets"));
exports.AssetsAPI = assets_1.default;
const apiEndpoints_1 = require("./types/apiEndpoints");
class BloxyAPI {
    // Public getter for configuration
    static get config() {
        return this._config;
    }
    // Public setter for configuration
    static set config(newConfig) {
        this._config = Object.assign(Object.assign({}, this._config), newConfig);
        // Re-initialize API clients with new config
        this.updateAPIClients();
    }
    // Re-initialize API clients to use updated config
    static updateAPIClients() {
        this.userAPI = new user_1.default();
        this.gameAPI = new game_1.default();
        this.assetsAPI = new assets_1.default();
    }
    constructor() {
        this.user = BloxyAPI.userAPI;
        this.game = BloxyAPI.gameAPI;
        this.assets = BloxyAPI.assetsAPI;
    }
}
exports.BloxyAPI = BloxyAPI;
// Static configuration object
BloxyAPI._config = {
    user: apiEndpoints_1.API_ENDPOINTS.USER,
    game: apiEndpoints_1.API_ENDPOINTS.GAME,
    assets: apiEndpoints_1.API_ENDPOINTS.ASSETS,
};
// Static API clients
BloxyAPI.userAPI = new user_1.default();
BloxyAPI.gameAPI = new game_1.default();
BloxyAPI.assetsAPI = new assets_1.default();
// Export default instance and configuration
const api = new BloxyAPI();
exports.default = api;
