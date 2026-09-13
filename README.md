# Psync

Psync is an open-source web application for practising mental skills inspired by sport psychology. It turns structured exercises into short, guided experiences that can support preparation, focus and constructive self-talk.

This repository contains an early public preview focused on two practices:

- **Imagery** — create, practise, reflect on and develop a vivid mental rehearsal.
- **Inner Voice** — notice self-talk and prepare a fair, realistic and helpful response.

Psync is an educational tool. It does not diagnose conditions, provide therapy or replace professional mental health care.

## Privacy by default

The current application has:

- no accounts;
- no database;
- no analytics or advertising;
- no server-side storage;
- no artificial-intelligence chat.

Exercise answers remain in the memory of the open browser page and disappear when the page is refreshed or closed. The hosting provider may process limited technical information; see the in-app Privacy page for details.

## Run locally

Requirements:

- Node.js 22.13 or newer;
- npm.

```bash
npm install
npm run dev
```

Open `http://localhost:3000` in your browser.

## Quality checks

```bash
npm run check
```

This runs linting, creates a production static export and verifies the generated pages.

## Static build

```bash
npm run build
```

The static site is generated in `dist/client/`. The project can be published on GitHub Pages without a custom domain.

## Project structure

```text
app/                    Application routes, components and styles
public/                 Psync icons and public assets
tests/                  Static export tests
.github/workflows/      Manual GitHub Pages deployment
```

The original research and working protocol documents are private source materials and are intentionally excluded from this repository.

## Contributing

Ideas, accessibility improvements and carefully reviewed content suggestions are welcome. Read [CONTRIBUTING.md](CONTRIBUTING.md) before opening a pull request. All participation is covered by our [Code of Conduct](CODE_OF_CONDUCT.md).

For security concerns, follow [SECURITY.md](SECURITY.md).

## License

The source code is available under the [MIT License](LICENSE).
