import { base } from '$app/paths';

export function toStyle(obj: { [key: string]: string }): string {
	return Object.entries(obj).reduce((acc, [key, val]) => {
		return (acc += `${key}:${val};`);
	}, '');
}

export function absLink(path: string) {
	return base + path;
}
