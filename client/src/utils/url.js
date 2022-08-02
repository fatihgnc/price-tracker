import { URL_REGEX } from './constants';

export const checkUrl = (url) => url.match(URL_REGEX);
