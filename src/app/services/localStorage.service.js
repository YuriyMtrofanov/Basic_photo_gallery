const TOKEN_KEY = "jwt-token";
const REFRESH_KEY = "jwt-refresh-token";
const EXPIRES_KEY = "jwt-expires";
const USERID_KEY = "user-local-id";

export function setTokens(payload) {
    const {
        idToken,
        refreshToken = 3600,
        expiresIn,
        localId
    } = payload;
    const expiresDate = new Date().getTime() + Number(expiresIn) * 1000;
    localStorage.setItem(TOKEN_KEY, idToken);
    localStorage.setItem(REFRESH_KEY, refreshToken);
    localStorage.setItem(EXPIRES_KEY, expiresDate);
    localStorage.setItem(USERID_KEY, localId);
};

export function getAccessToken() {
    return localStorage.getItem(TOKEN_KEY);
};

export function getRefreshToken() {
    return localStorage.getItem(REFRESH_KEY);
};

export function getExpiresDateToken() {
    return localStorage.getItem(EXPIRES_KEY);
};

export function getCurrentUserId() {
    return localStorage.getItem(USERID_KEY);
};

export function removeAuthData() {
    localStorage.removeItem(TOKEN_KEY);
    localStorage.removeItem(REFRESH_KEY);
    localStorage.removeItem(EXPIRES_KEY);
    localStorage.removeItem(USERID_KEY);
};

const localStorageService = {
    setTokens,
    getAccessToken,
    getRefreshToken,
    getExpiresDateToken,
    getCurrentUserId,
    removeAuthData
};

export default localStorageService;
