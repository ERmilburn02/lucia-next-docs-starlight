// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  site: "https://ermilburn02.github.io",
  base: "lucia-next-docs-starlight",
  integrations: [
    starlight({
      title: "Lucia Next",
      logo: {
        src: "/src/assets/lucia-logo-square-transparent.webp",
      },
      // social: {
      // },
      favicon: "/favicon.ico",
      sidebar: [
        {
          label: "Sessions",
          items: [
            { label: "Overview", slug: "sessions/overview" },
            { label: "Basic API", slug: "sessions/basic-api" },
            { label: "Cookies", slug: "sessions/cookies" },
            {
              label: "Migrate from Lucia v3",
              slug: "sessions/migrate-lucia-v3",
            },
          ],
        },
        {
          label: "Tutorials",
          items: [
            { label: "GitHub OAuth", slug: "tutorials/github-oauth" },
            { label: "Google OAuth", slug: "tutorials/google-oauth" },
          ],
        },
        {
          label: "Examples",
          items: [
            { label: "GitHub OAuth", slug: "examples/github-oauth" },
            { label: "Google OAuth", slug: "examples/google-oauth" },
            {
              label: "Email and password with 2FA",
              slug: "examples/email-password-2fa",
            },
            {
              label: "Email and password with 2FA and WebAuthn",
              slug: "examples/email-password-2fa-webauthn",
            },
          ],
        },
        {
          label: "Rate limiting",
          items: [
            { label: "Token bucket", slug: "rate-limit/token-bucket" },
            { label: "Throttling", slug: "rate-limit/throttling" },
          ],
        },
        {
          label: "Community",
          items: [
            { label: "GitHub", link: "https://github.com/lucia-auth/lucia" },
            { label: "Discord", link: "https://discord.gg/PwrK3kpVR3" },
            { label: "Twitter", link: "https://x.com/lucia_auth" },
            {
              label: "Donate",
              link: "https://github.com/sponsors/pilcrowOnPaper",
            },
          ],
        },
        {
          label: "Related projects",
          items: [
            {
              label: "The Copenhagen Book",
              link: "https://thecopenhagenbook.com",
            },
            { label: "Oslo", link: "https://oslojs.dev" },
            { label: "Arctic", link: "https://arcticjs.dev" },
          ],
        },
      ],
      credits: true, // adds the "Built with Starlight" link to the footer
    }),
  ],
});
