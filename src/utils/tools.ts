import request from 'request';

/**
 * Delay current async function by given time
 * @param ms Delay time in microseconds
 */
export function delay (ms: number): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

/**
 * Call an API by given options
 * @param url URL of api
 * @param opts Options of calling API
 */
export function callAPI (url: string, opts?: IApiConfig): Promise<any> {
    return new Promise((rs, rj) => {
        if (opts?.method === "GET") {
            const arrayData = [];
            for (const key of Object.keys(opts?.data || {})) {
                arrayData.push(`${key}=${opts?.data?.[key]}`);
            }
            if (arrayData.length > 0) {
                url += `?${arrayData.join("&")}`;
            }
        }
        request(
            url,
            {
                method: opts?.method || "GET",
                headers: { ...opts?.headers, Accept: "application/json" },
                json: true,
                body: opts?.data,
            },
            (error: any, response: any, body: any) => {
                if (error) {
                    return rj(error);
                }
                return rs(body);
            },
        );
    });
}

/**
 * Get current format time for app clock
 */
export function getCurrentFormatTime () {
    const date = new Date();
    return `${date.getHours()}:${date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes()}`;
}
