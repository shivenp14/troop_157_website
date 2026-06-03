# Troop Website Base Template Specification

## Purpose

The base template should give scouts a simple structure they can safely edit and improve over time. The first version should be a static website with plain HTML, CSS, and images. Avoid frameworks until the team understands the basics.

The scouts' MVP should focus on the required pages first: homepage, events/calendar, contact, and announcements. Activities, resources, and gallery pages can still be planned, but they should not block the first working version.

## Starter File Structure

The starter template now uses this simple static structure:

```text
troop_157_website/
  index.html
  events.html
  contact.html
  announcements.html
  package.json
  vite.config.mjs
  styles/
    main.css
  scripts/
    main.js
  assets/
    images/
    documents/
  docs/
    01-team-management-plan.md
    02-task-assignments-and-sequence.md
    03-base-template-spec.md
```

This structure keeps the site easy for beginners:

- Each major page has one HTML file.
- All styling lives in one CSS file.
- Basic behavior lives in one JavaScript file.
- npm and Vite provide the local dev server and build commands.
- Images and documents are separated from code.
- Planning documents stay in `docs/`.
- The starter site does not include an admin page yet. A real admin page requires login protection and should be handled in a later phase.

Optional future pages:

- `activities.html`
- `resources.html`
- `gallery.html`

## First Version Pages

### Home

Purpose:

- Welcome new families.
- Explain what Troop 157 is.
- Point visitors to the most important next steps.

Sections:

- Header and navigation.
- Hero section with troop name and short welcome message.
- Upcoming event or next meeting preview.
- Latest announcement preview.
- Three feature cards: events, contact, announcements.
- Short photo or activity highlight.
- Footer with approved contact information.

### Events

Purpose:

- Show public upcoming activities and calendar information without exposing private details.

Sections:

- Page intro.
- Upcoming events list.
- Static calendar placeholder.
- Repeating schedule note.
- "Confirm details with troop leadership" note.

Event fields:

- Event title.
- Date.
- Time or time range.
- Public location note.
- Short description.
- Audience: scouts, parents, visitors, or members only.

### Announcements

Purpose:

- Share important troop updates, upcoming event reminders, and schedule changes.

Sections:

- Page intro.
- Current announcements.
- Older announcements or archive section.
- Note that urgent details should be confirmed with troop leadership.

Announcement fields:

- Date.
- Title.
- Short message.
- Related event, if any.
- Status: draft, ready for review, or published.

### Contact

Purpose:

- Provide safe, approved ways to contact the troop or ask questions.

Sections:

- Approved contact method.
- What questions to send.
- How to ask about visiting a meeting.
- Optional parent FAQ.
- Safety/privacy note.

### Activities

Purpose:

- Show what scouts do in the troop.

Sections:

- Page intro.
- Activity card grid.
- Camping section.
- Service section.
- Advancement section.
- Meetings section.
- Safety note or parent note if approved.

### Resources

Purpose:

- Give families useful links and documents.

Sections:

- New family resources.
- Packing or preparation list.
- Uniform or meeting expectations.
- Helpful official links.
- Forms or documents, if approved.

### Gallery

Purpose:

- Show approved photos that represent troop activities.

Sections:

- Photo grid.
- Short captions.
- Alt text for every image.
- No youth full names in captions.

## Phase 2 Admin Feature

The admin page is a functional-version goal, not the first static MVP. It should eventually allow approved leaders to manage:

- Announcements.
- Events.
- Contact information.
- Homepage text or featured notices.

Before building the real admin page, decide:

- Who can log in.
- Who can publish changes.
- Whether scouts can draft content but adults approve it.
- Where event and announcement data is stored.
- How mistakes can be fixed.
- Whether the hosting platform supports secure authentication.

## Shared Page Layout

Every page should use the same basic layout:

```text
Header
  Troop name
  Navigation links

Main
  Page title
  Short intro
  Page-specific sections

Footer
  Contact information
  Meeting note
  Last updated date
```

## Starter HTML Shape

When the team is ready to build, each page can follow this shape:

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Troop 157</title>
    <link rel="stylesheet" href="styles/main.css">
  </head>
  <body>
    <header class="site-header">
      <a class="site-logo" href="index.html">Troop 157</a>
      <nav class="site-nav" aria-label="Main navigation">
        <a href="index.html">Home</a>
        <a href="events.html">Events</a>
        <a href="announcements.html">Announcements</a>
        <a href="contact.html">Contact</a>
        <a href="resources.html">Resources</a>
        <a href="gallery.html">Gallery</a>
      </nav>
    </header>

    <main>
      <section class="page-hero">
        <h1>Page Title</h1>
        <p>Short page intro goes here.</p>
      </section>

      <section class="content-section">
        <h2>Section Title</h2>
        <p>Section content goes here.</p>
      </section>
    </main>

    <footer class="site-footer">
      <p>Contact: approved troop contact goes here.</p>
      <p>Last updated: Month Year</p>
    </footer>
  </body>
</html>
```

This is a template shape, not a file to publish as-is.

## Visual Direction

Use a practical, outdoors-oriented style:

- Clean white or off-white background.
- Forest green, navy, and warm gold accents.
- Large readable text.
- Simple cards with clear headings.
- Real troop-approved photos when available.
- No busy backgrounds behind important text.
- No official logos unless the troop has permission and follows brand rules.

## CSS Guidelines

Keep the CSS beginner-friendly:

- Use simple class names.
- Put layout styles near the top.
- Put component styles together.
- Put mobile adjustments at the bottom.
- Avoid complicated animations.
- Avoid deeply nested selectors.

Suggested CSS sections:

```text
1. Base styles
2. Header and navigation
3. Shared layout
4. Buttons and links
5. Cards
6. Page-specific sections
7. Footer
8. Responsive styles
```

## Component List

Build only the components needed for the first version:

- Header navigation.
- Hero section.
- Button link.
- Feature card.
- Event item.
- Announcement item.
- Photo card.
- FAQ item.
- Footer.

Each component should have a simple example so scouts can copy and edit it.

## Accessibility Checklist

Every page should meet these basics:

- Use one `h1` per page.
- Use headings in order: `h1`, then `h2`, then `h3`.
- Give every image useful `alt` text.
- Make link text specific, not just "click here."
- Keep color contrast readable.
- Make the site usable on a phone.
- Make navigation links available on every page.

## Content Placeholder Rules

Use clear placeholders while drafting:

- `APPROVED TROOP CONTACT`
- `APPROVED MEETING LOCATION`
- `APPROVED PHOTO NEEDED`
- `DATE TO CONFIRM`
- `ADULT REVIEW REQUIRED`

Remove or replace every placeholder before launch.

## First Build Acceptance Criteria

The first build is ready for adult review when:

- All first-version pages exist.
- Navigation works between pages.
- Home page explains the troop clearly.
- Contact page has safe contact instructions.
- Events page has public-safe event details.
- Announcements section has current, approved updates.
- Gallery uses only approved images.
- Every image has alt text.
- The site works on desktop and phone.
- No youth private information is published.
