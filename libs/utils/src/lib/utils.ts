import { useTask$ } from '@builder.io/qwik';

export enum CookieKeyEnum {
  THEME = 'THEME',
}

export const useDebounce = () => {
  useTask$(() => {
    console.log(1);
  });

  return { value: 1 }
};
