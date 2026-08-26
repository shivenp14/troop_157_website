/** Build one event or announcement card. */
function createContentCard(item, className) {
  const card = document.createElement("article");
  card.className = className;

  const date = document.createElement("p");
  date.className = "item-date";
  date.textContent = item.date || "By September 16, 2026";

  const title = document.createElement("h3");
  title.textContent = item.title || "Sunday Sales confirmation";

  const message = document.createElement("p");
  message.textContent = item.message || "Please rsvp to confirm your attendance at the sales event. We look forward to seeing you there!";

  card.append(date, title, message);
  return card;
}

/** Replace a placeholder with content cards when approved content exists. */
export function renderContentList(targetId, items, className) {
  const target = document.getElementById(targetId);

  if (!target || items.length === 0) {
    return;
  }

  target.replaceChildren(
    ...items.map((item) => createContentCard(item, className))
  );
}

/** Show the newest announcement on the home page. */
export function renderAnnouncementPreview(targetId, announcements) {
  const target = document.getElementById(targetId);
  const newestAnnouncement = announcements[0];

  if (!target || !newestAnnouncement) {
    return;
  }

  target.replaceChildren(
    createContentCard(newestAnnouncement, "announcement-item")
  );
}
