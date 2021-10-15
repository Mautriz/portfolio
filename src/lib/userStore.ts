import { getContext, setContext } from 'svelte';
import { writable } from 'svelte/store';
import type { Readable } from 'svelte/store';

export interface User {
	id: string;
	username: string;
}

export const userContext = () => {
	const user = writable<User>(null);

	const setNewUser = user.set;
	const updateUser = user.update;

	return { user: user as Readable<User>, setNewUser, updateUser };
};

export const userContextKey = Symbol();
export const setUserContext = () => setContext(userContextKey, userContext());
export const getUserContext = () => getContext<ReturnType<typeof userContext>>(userContextKey);
