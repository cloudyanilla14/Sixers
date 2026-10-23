# HOOPD V6 — Better career-stat diagnostics

Replace root `index.html` and `netlify.toml`. Upload `netlify/functions/player.js` preserving the exact folders.

**Verify Netlify Function:** on your own site, open `/.netlify/functions/player?id=1966&kind=stats&season=2025&seasontype=2`. It should show ESPN JSON, not 404. If you see 404, make sure functions file is in `netlify/functions/player.js` in GitHub and redeploy. If 502, ESPN is unreachable from the Netlify function.

V6 improves parsing of nested formats and adds a diagnostics link rather than assuming Netlify setup is the only cause. Live upstream data behavior has not been tested.
