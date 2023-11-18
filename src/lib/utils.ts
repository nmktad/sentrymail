import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
 
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

type UserEmail = {
  first_name: string;
  last_name: string;
  email: string;
};

export function formatEmailString(
  userEmail: UserEmail,
  opts: { includeFullEmail: boolean } = { includeFullEmail: false }
) {
  if (userEmail.first_name && userEmail.last_name) {
    return `${userEmail.first_name} ${userEmail.last_name} ${
      opts.includeFullEmail ? `<${userEmail.email}>` : ''
    }`;
  }
  return userEmail.email;
}

export function toTitleCase(str: string) {
  return str.replace(/\w\S*/g, function (txt: string) {
    return txt.charAt(0).toUpperCase() + txt.substring(1).toLowerCase();
  });
}
