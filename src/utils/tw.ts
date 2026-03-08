import { twMerge } from '@weapp-tailwindcss/merge';
import clsx, { ClassValue } from 'clsx';

/**
 * 结合tailwind-merge 和 clsx
 * @description 主要用在tailwind样式出
 * @param inputs
 * @returns
 */
export function twClsx(...inputs: ClassValue[]) {
  return twMerge(clsx(...inputs));
}
