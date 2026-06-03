# Troop 157 Website Starter

This repository contains the starter template for the Troop 157 website project.

The site is currently a placeholder. It has the basic page structure, navigation, styling, JavaScript hooks, and planning documents that the scout team will build from. Most page text is intentionally placeholder text because scouts will write and replace the content through their assigned tasks.

## Current Status

The current version includes:

- A homepage placeholder.
- An events page with an upcoming-events area and a static calendar placeholder.
- An announcements page placeholder.
- A contact page placeholder.
- Basic responsive styling.
- Simple JavaScript for the mobile menu, footer year, and future event/announcement data.
- Planning documents in `docs/`.

The current version does not include:

- Final troop content.
- Real event data.
- Real announcements.
- Approved photos.
- A real admin page.
- Authentication or database storage.

## What Will Be Built Next

The scout team will work on:

- Replacing placeholder homepage content.
- Writing public-safe event descriptions.
- Filling in announcements.
- Creating approved contact instructions.
- Testing the site on desktop and mobile.
- Reviewing all content for safety and privacy.
- Planning a future admin/authentication system after the public MVP is working.

## Tech Stack

- HTML for page structure.
- CSS for styling.
- JavaScript for simple page behavior.
- npm for project commands.
- Vite for the local dev server and production build.
- No framework.

Scouts can edit the site with a normal text editor. Vite lets them test changes locally with auto-refresh.

## First-Time Setup

Run this once after downloading or cloning the project:

```bash
npm install
```

## Testing The Website

Start the local dev server:

```bash
npm run dev
```

Then open the URL shown in the terminal. It is usually:

```text
http://localhost:5173
```

Stop the dev server with `Ctrl+C`.

## Useful Commands

```bash
npm run dev
npm run build
npm run preview
npm run check:js
```

- `npm run dev`: start the local Vite dev server.
- `npm run build`: create the production-ready `dist/` folder.
- `npm run preview`: test the production build locally.
- `npm run check:js`: check the JavaScript file for syntax errors.

## Files

- `index.html`: homepage template.
- `events.html`: events page template.
- `announcements.html`: announcements page template.
- `contact.html`: contact page template.
- `styles/main.css`: shared styling.
- `scripts/main.js`: shared JavaScript.
- `vite.config.mjs`: Vite build settings for all HTML pages.
- `package.json`: npm scripts and project dependencies.
- `assets/images/`: approved images go here.
- `assets/documents/`: approved documents go here.
- `docs/`: project planning documents.

## JavaScript

The starter JavaScript currently handles:

- Mobile menu open/close.
- Current year in the footer.
- Empty event and announcement lists that scouts can fill later.

Keep JavaScript changes small and easy to explain.

## Scout Editing Rules

- Replace placeholder text only after the task is assigned.
- Do not publish youth last names, personal emails, phone numbers, home addresses, or school information.
- Use only approved photos.
- Give every image useful `alt` text.
- Ask the project lead before changing navigation, CSS, or JavaScript.

## Future Admin Page Note

There is no admin page in the starter site right now. A real admin page should be added later only after the team chooses a safe login, permissions, and data storage approach.
