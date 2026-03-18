import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Utilitário para combinar classes do Tailwind CSS de forma condicional.
 * Utiliza 'clsx' para lógica de classes e 'twMerge' para resolver conflitos de especificidade do Tailwind.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

