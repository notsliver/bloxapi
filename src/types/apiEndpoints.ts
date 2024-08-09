export const API_ENDPOINTS = {
    USER: 'https://users.roblox.com',
    GAME: 'https://games.roblox.com',
    ASSETS: 'https://api.roblox.com', 
} as const;

export type ApiEndpoints = typeof API_ENDPOINTS[keyof typeof API_ENDPOINTS];