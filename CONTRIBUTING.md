# Contributing

This repository contains a React/Vite product landing-page concept for a mechanical watch.

## Local setup

~~~bash
npm ci
npm run dev
~~~

Use Node.js 20 or later. Use npm for dependency changes and commit package-lock.json with package.json.

## Before opening a pull request

Run:

~~~bash
npm run build
~~~

Also verify the page in a browser at desktop and mobile widths. For hero changes, scroll through the full sequence and confirm that all numbered frames load in order.

## Asset and motion guidelines

- The hero expects 240 sequential PNG frames under public/images/herosection/.
- Keep referenced filenames and numbering synchronized with the component.
- Avoid adding large duplicate assets or committing generated build output.
- Check animation performance and keyboard/accessibility behavior.
- Respect reduced-motion preferences when changing motion behavior.
- Confirm rights before adding or redistributing product photography, logos, or third-party assets.

There is currently no dedicated automated test or lint script.
