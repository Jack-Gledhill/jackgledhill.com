export function isDevelopment(): boolean {
	if (process.env.NODE_ENV === undefined) {
		return false;
	}

	return process.env.NODE_ENV.toLowerCase() === "development"
}

export function isProduction(): boolean {
	if (process.env.NODE_ENV === undefined) {
		return true;
	}

	return process.env.NODE_ENV.toLowerCase() === "production"
}