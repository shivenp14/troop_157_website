# How to Make a Website Change

Use this checklist for one small task at a time.

## 1. Pick a Small Task

Good tasks include “update one event,” “fix one paragraph,” or “check every
navigation link.” Avoid changing several pages at once unless your assignment
requires it.

## 2. Start the Website

```bash
npm install
npm run dev
```

`npm install` is only needed the first time. Keep the website open while you
edit. Vite refreshes it after you save a file.

## 3. Make and Check the Change

1. Find the file in the table in `README.md`.
2. Change a small amount.
3. Save the file and look at the website.
4. Check both a wide window and a narrow phone-sized window.
5. Click any link you changed.
6. Read the privacy rules below.

Do not change text inside angle brackets unless you understand the HTML tag.
For example, change the words in `<h2>Old words</h2>`, but keep `<h2>` and
`</h2>`.

## 4. Run the Project Check

Stop the development server with `Ctrl+C`, then run:

```bash
npm run check
```

If it fails, read the first error, look for a file name and line number, and
fix that problem first. Ask a teammate when you are stuck.

## 5. Ask for Review

A change is ready only when:

- the page looks right on a computer and phone;
- links work;
- spelling and dates are correct;
- no private information is included;
- `npm run check` passes;
- another scout reviews it;
- an adult approves public content.

## Privacy Rules

Never publish youth last names, personal contact details, home addresses,
school information, private locations, unapproved photos, or member-only
documents. Use a troop-controlled contact method after adult approval.
