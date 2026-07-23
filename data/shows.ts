export interface Show {
  id: string;
  date: string;
  city: string;
  venue: string;
  showTitle: string;
  thumbnail: string;
  status: "available" | "soldOut";
  ticketUrl?: string;
}

const showThumbnails: Record<string, string> = {
  "Медичні Історії": "/med.jpg",
  "Я ніколи не...": "/never.jpg",
};

export const shows: Show[] = [
  {
    id: "1",
    date: "19 ЛИП · 16:30",
    city: "Львів",
    venue: "Зйомки",
    showTitle: "Я ніколи не...",
    thumbnail: showThumbnails["Я ніколи не..."],
    status: "available",
    ticketUrl: "https://secure.wayforpay.com/payment/nikoly7?utm_medium=social&utm_source=heylink.me",
  },
  {
    id: "2",
    date: "19 ЛИП · 19:30",
    city: "Львів",
    venue: "Зйомки",
    showTitle: "Я ніколи не...",
    thumbnail: showThumbnails["Я ніколи не..."],
    status: "available",
    ticketUrl: "https://secure.wayforpay.com/payment/nikoly8?utm_medium=social&utm_source=heylink.me",
  },
  {
    id: "3",
    date: "23 ЛИП",
    city: "Львів",
    venue: "Другий сезон",
    showTitle: "Медичні Історії",
    thumbnail: showThumbnails["Медичні Історії"],
    status: "available",
    ticketUrl: "https://com-com.com.ua/blog/medychni_istorii_lviv23_07/?utm_medium=social&utm_source=heylink.me",
  },
];
