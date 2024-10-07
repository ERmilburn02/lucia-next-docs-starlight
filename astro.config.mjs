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
      social: {
        github: "https://github.com/ERmilburn02/lucia-next-docs-starlight",
      },
      sidebar: [
        //   {
        //     label: "Guides",
        //     items: [
        //       // Each item here is one entry in the navigation menu.
        //       { label: "Example Guide", slug: "guides/example" },
        //     ],
        //   },
        //   {
        //     label: "Reference",
        //     autogenerate: { directory: "reference" },
        //   },
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
      ],
    }),
  ],
});
