import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const options: Intl.NumberFormatOptions = {
  style: 'currency',
  currency: 'NGN',
  maximumFractionDigits: 2,
};

export const formatCurrency = (value: number) => new Intl.NumberFormat('en-NG', options).format(value);
