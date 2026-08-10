import { announcements } from "./content.js";

function updateAnnouncementCount() {
  const countElement = document.getElementById("announcement-count");

  if (!countElement) {
    return;
  }

  const count = announcements.length;
  const message =
    count === 0
      ? "0 current announcements"
      : count === 1
      ? "1 current announcement"
      : `${count} current announcements`;

  countElement.textContent = message;
}

updateAnnouncementCount();
