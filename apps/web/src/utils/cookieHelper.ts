'use server';

import { cookies } from 'next/headers';

export const setCookie = (accesstoken: any) => {
  cookies().set('acsstkn', accesstoken);
};

export const getCookie = () => {
  return cookies().get('acsstkn');
};

export const removeCookie = () => {
  return cookies().delete('acsstkn');
}