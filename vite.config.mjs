import { resolve } from "node:path";
import { defineConfig } from "vite";

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        events: resolve(__dirname, "events.html"),
        announcements: resolve(__dirname, "announcements.html"),
        contact: resolve(__dirname, "contact.html")
      }
    }
  }
});
