# HOOPD — NBA Calendar & Player Profiles

A modern NBA fan app for Philippine Time (Asia/Manila), with all-NBA daily game schedules, matchup box scores, player headshots, individual player profiles, and season-by-season career statistics where ESPN publishes them.

## Deploy on your existing Netlify site

1. Open the existing `cloudyanilla14/Sixers` repository on GitHub.
2. Replace the root-level `index.html` with the `index.html` from this ZIP; commit the update.
3. Wait for Netlify's automatic deploy and hard refresh your browser (`Ctrl+Shift+R`).

Only `index.html` is needed for the static deployment. Existing Netlify settings can remain unchanged.

## Notes

- The app gets game data from ESPN's public NBA scoreboard API; player game box scores from its NBA summary API; player biographical information and individual season stats from its publicly available athlete APIs.
- No ESPN/NBA affiliation is implied. Data endpoints are not guaranteed and may reject browser requests (CORS) or change their responses. The site shows a fallback explanation rather than inventing stats.
- Player career history is loaded on demand, one season at a time over a limited 25-season window. It may take several seconds, depends on ESPN availability, and may not include earlier seasons for long-tenured players.
- Achievements are only listed when returned by the upstream player source. The website does not invent honors.
- Team artwork and athlete portraits are loaded remotely. Internet connectivity is required.
