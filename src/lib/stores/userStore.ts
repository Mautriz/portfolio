import { writable } from 'svelte/store';

export interface User {
	id: string;
	username: string;
}

const createUser = () => {
	const { subscribe, set, update } = writable<User>(null);
	return { subscribe, set, update };
};

export const user = createUser();
