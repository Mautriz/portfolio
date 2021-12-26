import { base } from '$app/paths';

export function toStyle(obj: { [key: string]: string }): string {
	return Object.entries(obj).reduce((acc, [key, val]) => {
		return (acc += `${key}:${val};`);
	}, '');
}

export function absLink(path: string) {
	return base + path;
}


export function debounce<T extends (...args: any[]) => any>(fn: T, delay = 2000) {
	let timeout: NodeJS.Timeout;
	return (...args: Parameters<T>) => {
		clearTimeout(timeout);
		timeout = setTimeout(() => {
			fn(...args);
		}, delay);
	};
}