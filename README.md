# Troop 157 Website

This is a small website that scouts can build together. It uses plain HTML,
CSS, and JavaScript so each part can be learned separately.

## Start Here

You need [Node.js](https://nodejs.org/) installed on your computer. Ask an
adult or project leader for help if it is not installed.

1. Open this folder in a code editor.
2. Open the editor's terminal.
3. Install the project tools (only needed the first time):

   ```bash
   npm install
   ```

4. Start the website:

   ```bash
   npm run dev
   ```

5. Hold `Command` (Mac) or `Ctrl` (Windows), then click the local link shown
   in the terminal. It is usually `http://localhost:5173`.
6. Press `Ctrl+C` in the terminal when you are finished.

If setup does not work, copy the terminal's error message and show it to the
project leader. Error messages are clues; you have not broken the project.

## Where Do I Make Changes?

| What you want to change | File to open |
| --- | --- |
| Home page words | `index.html` |
| Events page words | `events.html` |
| Announcements page words | `announcements.html` |
| Contact page words | `contact.html` |
| Events and announcements shown by JavaScript | `scripts/content.js` |
| Colors, spacing, and layout | `styles/main.css` |
| Menu or list behavior | `scripts/main.js` or `scripts/content-list.js` |

Most scouts should start with an HTML page or `scripts/content.js`. Ask the
project leader before changing shared styles or behavior because those changes
can affect every page.

## Project Map

```text
troop_157_website/
├── index.html                 Home page
├── events.html                Events page
├── announcements.html         Announcements page
├── contact.html               Contact page
├── assets/                    Approved images and documents
├── scripts/
│   ├── content.js             Easy-to-edit site updates
│   ├── content-list.js        Builds event and announcement cards
│   └── main.js                Starts shared page features
├── styles/
│   └── main.css               Styles shared by every page
├── docs/                      Project plans
├── CONTRIBUTING.md            Safe editing and review steps
└── package.json               Project commands
```

## Before You Share Your Work

Run this command:

```bash
npm run check
```

It checks the JavaScript and makes a production copy of the website. A passing
check ends with `built` and no red error message.

## Useful Commands

- `npm run dev` starts the editable website.
- `npm run check` checks all code and builds the site.
- `npm run build` creates the production `dist/` folder.
- `npm run preview` previews the production build.

## Safety Rules

- Do not publish a scout's last name, personal email, phone number, home
  address, school, or private event location.
- Use only photos and documents approved for public use.
- Give every image useful `alt` text that describes what is visible.
- Get peer, project-lead, and adult review before publishing.

The current site intentionally contains placeholders. Replace a placeholder
only when approved content is ready. A secure admin system is a later project;
never put a password in these files.
