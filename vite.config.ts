import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
export default defineConfig({
  plugins: [tailwindcss()],
  server: {
    host: "0.0.0.0", // Allow access from local network (mobile)
    port: 5173, // Optional: keep default or change if needed
  },
});
