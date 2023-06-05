import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";

const config = defineConfig({
  projectId: "j469v6ob",
  dataset: "production",
  title: "next-sanity",
  basePath: "/admin",
  plugins: [deskTool()],
});

export default config;
