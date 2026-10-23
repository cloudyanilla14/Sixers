# NBA PH Calendar – Player Stats Edition

One calendar for the entire NBA (all 30 teams), with Philippine-local dates and game times. Select a date to see every available NBA matchup. Tap a matchup to open its ESPN game box score: home and away player stats with switchable team tabs. No team selection needed.

## Update your existing Netlify site
Replace the **root** `index.html` file in your existing GitHub repository `cloudyanilla14/Sixers` with the one in this ZIP. Commit the change, and Netlify will automatically redeploy. No new project is required.

## Data availability
ESPN's public, undocumented scoreboard endpoint is used for each NBA day, then games are converted to Asia/Manila dates. Tapping a matchup loads ESPN's game summary for that specific event. Stats generally become available during/after the game; the page explains when they're missing. Requires internet and ESPN feed access. If ESPN's network/CORS policy blocks requests, the site will show an error. Future NBA Cup/playoff matchups may not be announced yet. The site does not fabricate missing schedules or stats.
