# bandlinks

This is a [Linktree](https://linktr.ee) like link aggregator for my band's websites, aka "link in bio". It is written
in [Svelte](https://svelte.dev/) with [SvelteKit](https://kit.svelte.dev/) and uses [Tailwind](https://tailwindcss.com/)
with [DaisyUI](https://daisyui.com). All content is fetched from a self-hosted instance of [Directus](https://directus.io/).

## Developing

Once you've created a project and installed dependencies with `pnpm install` (as the CI/CD is using `pnpm` as well), start a
development server:

```bash
pnpm run dev
```

## Building

To create a production version of your app:

```bash
pnpm run build
```

You can preview the production build with `pnpm run preview`.

## Deployment

There is a GitHub action triggered after every commit on `main` which will build a Docker container, push it to GitHub
Container Registry and trigger a re-deployment via a webhook. The project uses SvelteKit's `node-adaptor` to enable SSR. 
