export interface Project {
  id: string;
  title: string;
  description: string;
  accentColor: string;
  youtubeUrl: string;
  thumbnail?: string;
}

export const projects: Project[] = [
  {
    id: "med",
    title: "Медичні Історії",
    description: "Стендап-шоу про кумедні та шокуючі історії з лікарень",
    accentColor: "accent-cyan",
    youtubeUrl: "https://www.youtube.com/@slavikmartyniuk",
    thumbnail: "/med.jpg",
  },
  {
    id: "never",
    title: "Я ніколи не...",
    description: "Інтерактивне шоу, де глядачі обирають тему виступу",
    accentColor: "accent-red",
    youtubeUrl: "https://www.youtube.com/@slavikmartyniuk",
    thumbnail: "/never.jpg",
  },
];
