import {API} from './axios';

export const contact = data => API.post('contact', data);
