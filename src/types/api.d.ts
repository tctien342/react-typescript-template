interface IApiConfig {
    method?: "POST" | "GET";
    headers?: { [key: string]: string };
    data?: { [key: string]: string | number };
}
