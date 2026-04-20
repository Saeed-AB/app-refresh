import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

import fs from "fs";
import path from "path";

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");

  return {
    resolve: {
      alias: [{ find: "@", replacement: path.resolve(__dirname, "src") }],
    },
    plugins: [
      react(),
      tailwindcss(),
      {
        name: "generate-refresh-control-meta",
        closeBundle() {
          const version = Date.now();
          const refreshBehavior = env.VITE_REFRESH_APP_BEHAVIOR || "";

          const meta = {
            version,
            ...(refreshBehavior && { refreshBehavior }),
          };

          const outDir = path.resolve(__dirname, "dist/meta.json");
          fs.writeFileSync(outDir, JSON.stringify(meta, null, 2));
        },
      },
    ],
  };
});
