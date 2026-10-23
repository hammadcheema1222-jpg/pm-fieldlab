# PM Fieldlab v2 — React + TypeScript

An original 18-minute project management foundations introduction with an interactive café pilot. Inspired by the public themes of Bonnie Biafore’s [Project Management Foundations](https://www.linkedin.com/learning/project-management-foundations-15528659). Not affiliated with LinkedIn; no transcript reproduced; no official completion credit or mastery guarantee.

## Features
- Eight short lessons and scenario decisions with feedback and first-attempt records.
- Structured charter, stakeholder plan and acceptance criteria.
- Editable dependency schedule, live critical path/float calculation and £500 budget validator.
- Two owned risks with priority ratings, responses and triggers.
- Scope-change impact preview, decision record and closeout reflection.
- Markdown case study, print-to-PDF, LinkedIn project description, JSON backup/restore.
- Browser-local persistence, preserved v1 work and offline app shell after first online visit.
- Install prompt where supported; otherwise browser Add to Home Screen.

## Develop
Node 22.18+ (or newer Node supporting TypeScript stripping) and npm:

```sh
npm ci
npm test
npm run build
```

Serve `dist/` over HTTP(S). No API keys, accounts or paid runtime services. React and ReactDOM are bundled locally; offline lessons do not depend on a CDN. Service worker requires HTTPS or localhost.

## Source and live app

[Open the live app](https://pm-fieldlab-hammad.walizx133.chatgpt.site)

The full React/TypeScript source is in `src/`, installable/offline assets in `public/`, and the build configuration at the repository root. `npm run build` produces `dist/` and a downloadable `dist/source.json` snapshot. Serve `dist/` after building; the source `index.html` alone is not the compiled app.

## Evidence limitations
The rubric checks numerical constraints and structural writing requirements, not semantic writing quality or professional competence. All records are editable on the learner’s device; no independent identity verification. This is a fictional planning simulation, not evidence that a real café improved. Official course completion must happen separately on LinkedIn Learning. No automatic LinkedIn posting. Personal progress is never sent to GitHub or an analytics service.

## Validation
TypeScript strict checking, production bundle and five engine tests cover schedule branches/float, budget and deadline gates, invalidation after edits, malformed backups and evidence fidelity. Browser QA checks interactive progression and evidence UI.
