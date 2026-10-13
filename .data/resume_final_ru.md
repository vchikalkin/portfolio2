# Чикалкин Владислав

**Senior Frontend Engineer (React / TypeScript) | Fullstack Product**

Москва · удалённо / гибрид  
Телефон: +7 (926) 925-08-68 · Telegram: @vchikalkin · Email: i@vchikalkin.ru  
Портфолио: https://vchikalkin.dev

---

## О себе

8+ лет в лизинге. С нуля сделал калькулятор, на котором работают продажи: React и Next.js, сервис на .NET/C# с формулами графика платежей и коммерческого предложения, деплой в Docker. Им пользуются около 500 человек в разных городах, в пике 10–20 КП в секунду. CRM отвечает медленно, поэтому справочники держу в Redis, у каждого поля свой TTL.

---

## Навыки

- **Языки:** TypeScript, JavaScript, C#
- **Frontend:** React, Next.js (SSR), MobX, GraphQL, tRPC, Zod, Ant Design, Tailwind CSS, styled-components, shadcn/ui, PWA
- **Backend:** Node.js, Nest.js, REST, JWT, LDAP / Active Directory, .NET
- **Данные:** Redis, PostgreSQL, MongoDB, WebSocket
- **Деплой:** Docker, nginx, Traefik, GitLab CI, Azure DevOps, Linux (Ubuntu), Jest, Vitest, Sentry
- **Ещё:** Telegram-боты на long polling и webhooks, LLM API (Google AI Studio)

---

## Опыт

### Senior Fullstack Developer — ЛК Эволюция (evoleasing.ru)

**Москва · август 2020 – настоящее время**

Пришёл одним из первых ~20 человек. Делал интерфейс калькулятора, расчёт на .NET и деплой. В команде 5 человек: я и ещё один senior, двое разработчиков, один junior. CRM на .NET писали другие. По калькулятору ревьюил код и менторил junior и middle.

- За 3 месяца выкатил MVP калькулятора, около 70% полей: экран на React и сервис на .NET/C# с формулами графика платежей и КП. На этой версии стартовали продажи. Остальные поля дописал примерно за год.
- Калькулятор держит ~500 пользователей и пик 10–20 КП/с. Формулы графика и КП считаю в .NET, а ~100+ справочных полей CRM кладу в Redis с TTL на каждое поле. Тормозит API и SQL самой CRM.
- Переписал калькулятор с клиентского SPA на Next.js с SSR. На слабом офисном ПК страница приходит уже собранной, бандл догружается следом.
- В форме 100+ полей. Вместе с аналитиком написал реакции MobX: меняешь одно поле, пересчитываются 10+ связанных.
- Связал Next.js и Node через tRPC и Zod, у клиента и сервера общие типы. GraphQL и REST к CRM остались. Добавил мобильную вёрстку, установку как PWA и расчёт полиса через «ЭЛТ-Поиск».
- Сделал общий логин для приложений компании. Nest.js ходит в LDAP/Active Directory и выдаёт JWT. Из интернета дополнительно нужен код из Telegram. Калькулятор пускаю через nginx `auth_request`. В сервисах на Nest.js хожу в PostgreSQL и MongoDB напрямую.
- Деплоил через Docker, Traefik и SSL: ветка, тест, стенд `-dev`, потом production. Сначала пайплайн вёл в Azure DevOps, потом перенёс на GitLab CI. На запуске покрыл калькулятор и авторизацию тестами на Jest. Unit-тесты сейчас на Vitest.
- Сделал приложение для правок страховки по уже сданным в лизинг предметам. Менеджер меняет договор в форме, изменение уходит в CRM по REST.

**Стек:** TypeScript, React, Next.js, MobX, GraphQL, tRPC, Zod, Ant Design, Nest.js, PostgreSQL, MongoDB, Redis, Docker, nginx, Traefik, GitLab CI, Azure DevOps, Jest, Vitest, Sentry

### Fullstack Developer — Carcade Leasing (carcade.com)

**Россия · июль 2018 – август 2020**

- Сделал внутренний аукцион списанной техники. Ставки принимаю по WebSocket и складываю в очередь с порядком на миллисекундах.
- Сделал приложение агента на React Native (Expo): заявка в CRM, статусы, расчёт вознаграждения, выгрузка документов. Опубликовал в Google Play и App Store. API на ASP.NET писал другой разработчик. Перед уходом передал поддержку.
- Дорабатывал лизинговый калькулятор: экраны и правила расчёта, которыми пользуются менеджеры.
- Написал Telegram-бота на Node.js к MS CRM. Клиент смотрит статус и получает уведомления в боте. Ботов делал и на long polling, и на webhooks.
- Написал консольную программу на C#: она забирает данные СПАРК-Интерфакс и обновляет карточки в CRM.
- Делал сайт компании и личный кабинет и подключил оба к CRM и внешним API.

**Стек:** JavaScript, React, MobX, Node.js, C#, ASP.NET, REST, WebSocket, React Native, Expo, MS CRM

---

## Дополнительно

- Небольшой внутренний UI-kit на shadcn/ui, Tailwind, CVA и `cn`: поле ввода, select, textarea, кнопки.
- На другой работе, уже не в ЛК Эволюция: сценарий в n8n, проверка задачи в Pyrus и письмо участникам, если проверка прошла.
- Интеграции с Google AI Studio. Ответ модели читаю сам, до того как его увидит пользователь.
- Open source: [XKeen-UI](https://github.com/zxc-rv/XKeen-UI), [Pixel-Modem-Fix](https://github.com/vchikalkin/Pixel-Modem-Fix), [TiktokPatchXposed](https://github.com/vchikalkin/TiktokPatchXposed), [next-downloader-bot](https://github.com/vchikalkin/next-downloader-bot). Сайты: [vchikalkin.dev](https://vchikalkin.dev/ru), [victoriachikalkina.com](https://victoriachikalkina.com). Дома на Linux кручу homelab и автоматизацию квартиры.

---

## Образование

**Магистр — Информатика и вычислительная техника**  
Рязанский государственный радиотехнический университет · 2018

**Бакалавр — Проектирование и технология электронных средств**  
Рязанский государственный радиотехнический университет · 2016

---

## Языки

- Русский — родной
- Английский — B1 (средний)
