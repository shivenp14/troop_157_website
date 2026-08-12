import { events } from "./content.js";

const eventCount = document.getElementById("event-count");

function updateEventCount() {
  const count = events.length;

  if (count === 0) {
    eventCount.textContent = "0 upcoming events";
  } else if (count === 1) {
    eventCount.textContent = "1 upcoming event";
  } else {
    eventCount.textContent = `${count} upcoming events`;
  }
}

updateEventCount();