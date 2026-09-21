import { announcements, events } from "./content.js";
import {
  renderAnnouncementPreview,
  renderContentList
} from "./content-list.js";

function setupMobileMenu() {
  const header = document.querySelector(".site-header");
  const button = document.querySelector(".nav-toggle");

  if (!header || !button) {
    return;
  }

  button.addEventListener("click", () => {
    const isOpen = header.classList.toggle("menu-open");
    button.setAttribute("aria-expanded", String(isOpen));
    button.textContent = isOpen ? "Close menu" : "Menu";
  });
}

function markCurrentPage() {
  const currentFile = window.location.pathname.split("/").pop() || "index.html";

  document.querySelectorAll(".site-nav a").forEach((link) => {
    if (link.getAttribute("href") === currentFile) {
      link.setAttribute("aria-current", "page");
    }
  });
}

function showCurrentYear() {
  const currentYear = String(new Date().getFullYear());

  document.querySelectorAll("[data-current-year]").forEach((element) => {
    element.textContent = currentYear;
  });
}

function getComparableDateValue(item) {
  if (!item || typeof item.dateValue !== "string") {
    return Number.POSITIVE_INFINITY;
  }

  const parsedDate = Date.parse(item.dateValue);
  return Number.isNaN(parsedDate) ? Number.POSITIVE_INFINITY : parsedDate;
}

function sortEventsByDateValue(items) {
  return [...items].sort((left, right) => {
    const leftDateValue = getComparableDateValue(left);
    const rightDateValue = getComparableDateValue(right);

    return leftDateValue - rightDateValue;
  });
}

function startWebsite() {
  setupMobileMenu();
  markCurrentPage();
  showCurrentYear();
  renderContentList("announcements-list", announcements, "announcement-item");
  renderContentList("events-list", sortEventsByDateValue(events), "event-item");
  renderAnnouncementPreview("home-announcement-preview", announcements);
}

startWebsite();
