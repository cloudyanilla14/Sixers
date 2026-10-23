# NBA PH — All Teams Calendar (2026–27)

Netlify-ready static site + serverless function. Displays all 30 NBA teams in Philippine time (Asia/Manila). Select **All NBA Teams** or any one team, navigate October 2026–June 2027, toggle list/calendar, see scores, and export visible games to an ICS calendar file.

## Updating your existing Netlify project
1. Download and unzip this project.
2. In the existing GitHub repository, replace root `index.html` and `netlify.toml`, add `sixers-schedule.json`, and add `netlify/functions/games.js`. Keep all paths and subfolders.
3. Commit changes; Netlify redeploys automatically.
4. Hard-refresh the deployed URL.

## Data and known limitations
The monthly schedule and scores are fetched server-side from ESPN's unofficial public scoreboard endpoint, requested by UTC date window and converted client-side to Asia/Manila. No API token required, but availability, completeness, or response shape is not guaranteed. The **built-in Sixers schedule** remains a fallback ONLY for Philadelphia. Other teams require the scoreboard connection and the site prominently says so when offline. ESPN's live scoreboard results may be delayed; refresh to see newer results. The calendar covers through June to accommodate playoffs as they are scheduled. Future NBA Cup fixtures and playoff matches may be absent until announced. ESPN logos and team names are trademarks of their respective owners.
