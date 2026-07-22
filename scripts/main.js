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

function startWebsite() {
  setupMobileMenu();
  markCurrentPage();
  showCurrentYear();
  renderContentList("announcements-list", announcements, "announcement-item");
  renderContentList("events-list", events, "event-item");
  renderAnnouncementPreview("home-announcement-preview", announcements);
}

startWebsite();
