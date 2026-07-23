# Стан проєкту на 2026-07-23

## Що зроблено
- Побудовано Next.js 14 проєкт з нуля (App Router, TypeScript, Tailwind, Framer Motion)
- 5 секцій: Hero, Афіша, Проєкти, ЗСУ-блок, Футер
- Кастомна тема: dark club style, токени кольорів, шрифти Unbounded + Plus Jakarta Sans
- UI-компоненти: Button (3 варіанти), Modal (AnimatePresence)
- Дані винесено в `data/shows.ts` та `data/projects.ts`
- Mobile-first адаптивність
- Емодзі замінено на Lucide-іконки
- `npm run build` проходить без помилок
- Фото героя, thumbnail-и шоу, реальні посилання на квитки
- Соцмережі: Instagram, Telegram, YouTube (реальні URL)
- Monobank-донат → base.monobank.ua
- Hero з фоновим зображенням (next/image)
- Thumbnail-и в ProjectCard та TicketCard

## Готово
- [x] Фото героя
- [x] Thumbnail-и для шоу (med.jpg, never.jpg)
- [x] Посилання на квитки (3 шоу)
- [x] Monobank URL
- [x] Соцмережі (Instagram, Telegram, YouTube)
- [x] Кнопка "Закинути в Банку" → Monobank

## Залишилось
- [ ] SEO мета-теги
- [ ] Деплой на Vercel
