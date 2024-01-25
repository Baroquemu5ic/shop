import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import slugify from "slugify";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getBlogSlug(input: string) {
  return slugify(input).toLowerCase() || 'no-such-blog-exist'
}