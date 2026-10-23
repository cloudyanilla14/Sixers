# NBA PH — one-calendar rebuild

One clickable monthly NBA calendar for ALL games from the ESPN scoreboard, converted to Asia/Manila. Clicking any day shows all matchups, scores/status, logos, venue, broadcasts when available.

## Deployment
Upload `index.html` at the ROOT of your existing `cloudyanilla14/Sixers` repository. Keep Netlify's publish directory as `.`. No build command or serverless function is needed. Existing `netlify.toml` can remain, but this version does not call the prior Sixers-only function.

## Data reliability
The app queries ESPN's public, undocumented NBA scoreboard directly for each individual US calendar day, including 2-day padding on both ends to account for the Asia/Manila date shift. Games are deduplicated by event ID and grouped using Philippine dates. It issues ~34 daily requests (7 concurrently) when each month is first opened and refreshes every two minutes on a visible page. It caches results for two minutes per month in memory. If any request fails the app warns that the month is incomplete; it never silently substitutes the Sixers schedule as the entire NBA. The site requires internet access and ESPN feed availability. ESPN may change its API or CORS policies. No guarantee of uninterrupted real-time service.
