import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    env: {
      browserPermissions: {
        geolocation: "allow",
      },
    },
  },
});

