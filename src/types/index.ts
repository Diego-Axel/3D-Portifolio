/**
 * Interface que representa um Projeto no portfólio.
 */
export interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  link: string;
}

/**
 * Interface que representa uma categoria de Habilidades (ex: Frontend, Backend).
 */
export interface Skill {
  category: string;
  items: string[];
}

/**
 * Interface para itens de navegação do menu.
 */
export interface NavItem {
  label: string;
  href: string;
}

