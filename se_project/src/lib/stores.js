import { writable } from 'svelte/store';

export const user_account = writable({
    logged_in: false,
    email: '',
    name: '',
    password: '',
    account_type: '',
});