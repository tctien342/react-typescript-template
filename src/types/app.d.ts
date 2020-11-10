type TSupportDarkMode = "light" | "dark" | "auto";

interface IAppConfig {
    /**
     * User token from from login
     */
    userToken?: string;
    /**
     * If app is in dark mode
     */
    dark?: TSupportDarkMode;
}
