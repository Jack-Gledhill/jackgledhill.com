export function isDevelopment() {
		if (process.env.NODE_ENV === undefined) {
				return false;
		}

		return process.env.NODE_ENV.toLowerCase() === "development"
}

/**
 * Decodes a base-64 encoded email and inserts it into the href of an anchor tag at the given ID.
 *
 * @param {string} encodedEmail
 * @param {string} elemId
 */
export function decodeEmail(encodedEmail, elemId) {
		let elem = document.getElementById(elemId);
		if (elem) {
				let decodedEmail = window.atob(encodedEmail);
				elem.href = 'mailto:' + decodedEmail;
		}
}