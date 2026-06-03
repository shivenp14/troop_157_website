# Admin And Content Management Plan

## Why This Needs Its Own Plan

The scouts' functional-version goal includes an admin page where leaders can add announcements, add events, and change important troop information. That is useful, but it is also the riskiest part of the project because it affects public content and requires security.

The team should build the public MVP first, then plan the admin page carefully.

## Recommended Phases

### Phase 1: Static MVP

Build the public website without a real admin system.

Includes:

- Homepage.
- Events page.
- Contact page.
- Announcement section or announcements page.
- Mobile-friendly layout.
- Safe public content.

Updates are made manually by the project lead or approved maintainer.

### Phase 2: Admin Planning

Plan the admin page requirements so scouts and leaders can agree on what it should do before anyone builds it.

The plan should define:

- Who can log in.
- Who can add announcements.
- Who can add events.
- Who can edit contact information.
- Who reviews drafts.
- Who can publish changes.

Do not add an admin page to the public website until the team chooses the authentication and data storage approach.

### Phase 3: Real Admin System

Build the real admin feature only after the team chooses a secure technical approach.

The real version must include:

- Login protection.
- Permission rules.
- Safe storage for events and announcements.
- A way to edit or delete mistakes.
- Adult review before public publishing, if scouts are allowed to draft content.

## Admin User Roles

Recommended roles:

- Adult admin: can publish announcements, events, and contact changes.
- Scout editor: can draft announcements or event descriptions, but cannot publish alone.
- Reviewer: checks drafts for accuracy, spelling, and safety.
- Public visitor: can only view the website.

## Editable Content

The admin page should manage only content that needs frequent updates:

- Announcements.
- Events.
- Homepage featured announcement.
- Contact information.
- Meeting information, if approved.

Avoid letting the admin page edit everything at first. More editable areas create more ways to break the site.

## Announcement Fields

Each announcement should have:

- Title.
- Date.
- Short message.
- Related event, if any.
- Status: draft, ready for review, published, or archived.
- Last updated date.

Publishing rules:

- Announcements must be short.
- Announcements must not include youth private information.
- Schedule changes should be reviewed by an adult leader.
- Old announcements should be archived or removed.

## Event Fields

Each event should have:

- Event title.
- Date.
- Time or time range.
- Public location note.
- Short description.
- Audience: scouts, parents, visitors, or members only.
- Status: draft, ready for review, published, or archived.

Publishing rules:

- Do not publish private location details unless approved.
- Do not publish youth personal information.
- Keep event descriptions short and clear.
- Remove or archive old events.

## Contact Information Fields

Contact information should include only adult-approved public information:

- Troop contact email.
- General meeting note.
- How to ask about visiting.
- Optional contact form instructions.

Do not store or publish:

- Scout personal emails.
- Scout phone numbers.
- Youth last names.
- Home addresses.
- School schedules.

## Admin Page Acceptance Criteria

The admin feature is ready only when:

- Random visitors cannot access it.
- Only approved users can log in.
- Scouts cannot accidentally publish unreviewed public content.
- Admin changes can be edited or reversed.
- Announcements and events update correctly on the public pages.
- The site still works on mobile.
- An adult leader has reviewed the workflow.

## Suggested Technical Direction

For the first real admin version, use the simplest secure option supported by the hosting platform.

Good options to evaluate:

- A static site plus a hosted CMS.
- A small backend with login and a database.
- A trusted platform that already provides authentication and content editing.

Avoid:

- A public form that writes directly to the website without login.
- Shared passwords written in code.
- Admin pages hidden only by a secret URL.
- Letting anyone submit HTML directly.
