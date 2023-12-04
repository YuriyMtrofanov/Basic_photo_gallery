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

const localStorageService = {
    setTokens
};

export default localStorageService;
