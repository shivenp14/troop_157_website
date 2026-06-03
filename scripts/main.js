// Scouts can add approved announcement and event objects here later.
const sampleAnnouncements = [];
const sampleEvents = [];

function setupMobileMenu() {
  const header = document.querySelector(".site-header");
  const button = document.querySelector(".nav-toggle");

  if (!header || !button) {
    return;
  }

  button.addEventListener("click", () => {
    const isOpen = header.classList.toggle("menu-open");
    button.setAttribute("aria-expanded", String(isOpen));
  });
}

function setupCurrentYear() {
  const yearElements = document.querySelectorAll("[data-current-year]");
  const currentYear = new Date().getFullYear();

  yearElements.forEach((element) => {
    element.textContent = currentYear;
  });
}

function createListItem(item, className) {
  const article = document.createElement("article");
  article.className = className;

  const date = document.createElement("p");
  date.className = "item-date";
  date.textContent = item.date || "DATE TO CONFIRM";

  const title = document.createElement("h3");
  title.textContent = item.title || "Title Placeholder";

  const message = document.createElement("p");
  message.textContent = item.message || "PLACEHOLDER: Add safe public text here.";

  article.append(date, title, message);
  return article;
}

function renderList(targetId, items, className) {
  const target = document.getElementById(targetId);

  if (!target || items.length === 0) {
    return;
  }

  target.innerHTML = "";
  items.forEach((item) => {
    target.append(createListItem(item, className));
  });
}

function renderHomePreview() {
  const target = document.getElementById("home-announcement-preview");

  if (!target || sampleAnnouncements.length === 0) {
    return;
  }

  target.innerHTML = "";
  target.append(createListItem(sampleAnnouncements[0], "announcement-item"));
}

setupMobileMenu();
setupCurrentYear();
renderList("announcements-list", sampleAnnouncements, "announcement-item");
renderList("events-list", sampleEvents, "event-item");
renderHomePreview();
