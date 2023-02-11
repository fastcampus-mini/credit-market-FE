export const getStorageItem = (key: string, defaultValue = '') => {
	try {
		const storedValue = JSON.parse(localStorage.getItem(key) || '""');
		return storedValue ? storedValue : defaultValue;
	} catch (error) {
		console.error(error);
		return defaultValue;
	}
};

export const setStorageItem = <T>(key: string, value: T) => {
	try {
		localStorage.setItem(key, JSON.stringify(value));
	} catch (error) {
		console.error(error);
	}
};

export const removeStorageItem = (key: string) => {
	try {
		localStorage.removeItem(key);
	} catch (error) {
		console.error(error);
	}
};
