# HOOPD v5 — Player Bio & Career Stats Fix

## Updating your existing Netlify + GitHub site
Replace root `index.html` and `netlify.toml`, then upload `netlify/functions/player.js` preserving the folder structure. Commit changes. The Netlify build must support Functions. Clear the browser cache after deployment.

### Changes
- HOOPD wordmark remains; basketball icon becomes an NBA logo graphic loaded from the NBA CDN.
- Basketball arena-inspired background and richer player profile.
- Bio gracefully falls back across three ESPN endpoints.
- Career seasons now fetch through a Netlify Function (avoiding browser CORS), with 28 years of season lookups and resilient category parsing.
- Incomplete ESPN records remain labeled as unavailable rather than guessed.

ESPN public APIs are unofficial and may change. NBA imagery and names are third-party trademarks; this is an independent fan website. Data not live-verified here because outbound access from this environment was unavailable.
