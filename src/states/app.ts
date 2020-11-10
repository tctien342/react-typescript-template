import { atom } from 'recoil';

/**
 * App loaded state key
 */
const LOADED_KEY = "loaded_key";
/**
 * App loaded state, true if app is loaded
 */
export const appLoaded = atom({
    key: LOADED_KEY,
    default: false,
});

/**
 * Login state key
 */
const LOGIN_STATE_KEY = "user_login_state";
/**
 * Login state, true if logged in
 */
export const loginState = atom({
    key: LOGIN_STATE_KEY,
    default: true,
});

/**
 * Dark state key
 */
const DARK_STATE_KEY = "dark_state";
/**
 * Dark state, true if app in dark mode
 */
export const darkState = atom<TSupportDarkMode>({
    key: DARK_STATE_KEY,
    default: "auto",
});
