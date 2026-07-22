## Root cause

The Lovable ↔ GitHub two-way sync is currently broken. The GitHub repo `jordanlander/jordanlander` is stuck on an old static-site commit whose latest message is `Delete CNAME`. As a result, GitHub is missing:

- The `public/CNAME` file (so GitHub Pages shows “DNS Check in Progress” and the custom domain can fail or show blank)
- The new Vite/React source files (`vite.config.ts`, `src/`, etc.)
- The correct `.github/workflows/static.yml` workflow that builds and uploads `./dist`

My remote checks confirm that `jordanlander.com` sometimes resolves to the latest content, but the underlying GitHub Pages deployment is inconsistent and the project URL still serves the old site. The fix is to re-sync the project and make the deployment files more robust.

## What I will change in the codebase

1. **Add `public/.nojekyll`** — prevents GitHub Pages from running Jekyll on the deployment, which avoids subtle path issues.
2. **Add cache-busting meta tags in `index.html`** — tells browsers and CDNs not to cache the page as heavily, so updates appear immediately after a deploy.
3. **Explicitly set `base: '/'` in `vite.config.ts`** — makes the canonical custom domain the default base for all asset URLs.
4. **Confirm `public/CNAME` and `.github/workflows/static.yml`** — verify the CNAME contains exactly `jordanlander.com` and that the workflow builds the project and uploads only `./dist`.

## What you need to do (one step)

5. **Re-sync the GitHub integration** — in the Lovable editor, go to the GitHub integration and reconnect/re-sync the project to `jordanlander/jordanlander`. This pushes the current codebase (including the restored CNAME and workflow) to GitHub and overwrites the stale state.

## After re-sync

6. I will trigger or verify a GitHub Actions run and check the live site at `jordanlander.com` (desktop + mobile) to confirm the blank page is gone and the custom domain is no longer stuck in “DNS Check in Progress.”
7. I will ask you to hard-refresh the page on your phone to clear any cached DNS or browser cache.

## Expected outcome

`jordanlander.com` serves the latest version of the site, updates reliably on every push, and the custom domain passes GitHub Pages verification.
