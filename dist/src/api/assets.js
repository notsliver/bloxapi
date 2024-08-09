"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = __importDefault(require("../core/client"));
const apiEndpoints_1 = require("../types/apiEndpoints");
class AssetsAPI {
    constructor() {
        this.client = new client_1.default(apiEndpoints_1.API_ENDPOINTS.ASSETS);
    }
    getAssetInfo(assetId) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.client.get(`/v1/assets/${assetId}`);
        });
    }
    getAssetOwners(assetId) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.client.get(`/v1/assets/${assetId}/owners`);
        });
    }
}
exports.default = AssetsAPI;
