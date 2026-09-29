# ByteSpace

Landing page, login and registration UI for ByteSpace, an online course platform, built from the Figma design.

## Tech stack

- [Next.js](https://nextjs.org) (App Router)
- React
- TypeScript
- Tailwind CSS v4

## Getting started

Requires Node.js 20 or newer.

```bash
npm install
npm run dev
```

| Route       | Page              |
| ----------- | ----------------- |
| `/`         | Landing page      |
| `/login`    | Sign in           |
| `/register` | Create an account |

## Scripts

| Command         | Description                  |
| --------------- | ---------------------------- |
| `npm run dev`   | Start the development server |
| `npm run build` | Create a production build    |
| `npm run start` | Serve the production build   |
| `npm run lint`  | Run ESLint                   |

## Project structure

```
src/
  app/                  Routes, root layout and global styles
    (auth)/login        Login page
    (auth)/register     Registration page
  components/
    layout/             Navbar, footer, newsletter form
    sections/           Landing page sections
    auth/               Auth layout, forms and fields
    ui/                 Reusable building blocks (buttons, cards, icons, shapes)
  data/                 Page content (courses, categories, testimonials, links)
public/images/          Images and 3D shape assets
```

The login and registration forms are frontend only and are not connected to a backend.
