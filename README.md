# HOOPD V7 — Hybrid Design Edition

A visual-only redesign based on the original V6 app. **All V6 JavaScript and Netlify functions are unchanged.** All-NBA monthly calendar, clickable dates, game scores, box-score player tables, player profiles, Philippine timezone conversion and the existing career-stats/error behavior are retained.

### Deploy to existing GitHub / Netlify

1. Unzip this archive.
2. Upload/replace `index.html`, `netlify.toml`, `netlify/functions/player.js` and **the `assets/arena.svg` file** at the root of your repository, preserving folders.
3. Commit to your current Netlify-connected branch. Netlify auto-deploys.
4. Hard-refresh your browser after deployment.

### What's new

- Premium dark hybrid court-themed wallpaper, supplied as local SVG (no external photo dependency)
- Editorial hero, updated navigation and calendar styling
- Larger team logos, more polished clickable match cards
- NBA-2K-inspired scoreboard modal and cinematic player hero cards
- Responsive layouts and reduced-motion support

### Known limitation

**Player year-by-year career-history retrieval is NOT repaired in V7.** It uses the same ESPN integration from V6. No statistics, achievements, schedules or scores have been invented.

HOOPD is an independent fan concept and not officially affiliated with the NBA.
