import { reactRouter } from "@react-router/dev/vite";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import devtoolsJson from 'vite-plugin-devtools-json';
import { sentryReactRouter, type SentryReactRouterBuildOptions } from "@sentry/react-router";




const sentryConfig: SentryReactRouterBuildOptions = {
  org: "jsm-mastery-g7",
  project: "javascript-react",
  // An auth token is required for uploading source maps.
  authToken: "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"
  // ...
};


export default defineConfig(config => {
  return {
    plugins: [tailwindcss(), tsconfigPaths(), reactRouter(), sentryReactRouter(sentryConfig, config), devtoolsJson()],
    sentryConfig,
    ssr: {
      noExternal: [/@syncfusion/]
    }
  };
});
