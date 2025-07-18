export function isDevelopment() {
    if (process.env.NODE_ENV === undefined) {
        return false;
    }

    return process.env.NODE_ENV.toLowerCase() === "development"
}