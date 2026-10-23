# Sixers PH — 2026–27 Calendar

A responsive Philadelphia 76ers calendar built for Philippine Standard Time (UTC+8).

## Deploy to Netlify

**Recommended: Netlify + GitHub**
1. Put the files from this folder in a GitHub repository (keep `netlify/` and `netlify.toml`).
2. In Netlify, select **Add new project → Import an existing project**.
3. Select the repository. Build command: leave blank. Publish directory: `.`.
4. Click Deploy. Netlify will deploy the serverless function and website.

**Manual drag-and-drop**
- The website's static files can be dragged and dropped, but **Netlify manual deploys generally do not build the `netlify/functions` source code**. The live schedule will fail if you only drag the raw ZIP/folder into Netlify Drop.
- To deploy with the serverless function, use Git-based deployment above, or run Netlify CLI (`npm install -g netlify-cli` then `netlify deploy --prod --dir=. --functions=netlify/functions`) with appropriate Netlify account authentication.

## Data
- Schedule: ESPN public team schedule endpoint (third-party, unofficial and can change).
- Dates stored in UTC and displayed with `Asia/Manila`, so after-midnight games land on the correct PH date.
- When API is unavailable, the website clearly labels a limited November 2026 backup preview, not a complete season.
- Preseason and postseason are not included in the current season view.
- .ics download contains the games currently loaded, with fixed start instants.

This is an unofficial fan website, not affiliated with the NBA or Philadelphia 76ers.
