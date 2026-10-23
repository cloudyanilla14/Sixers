// Netlify serverless proxy: monthly ESPN NBA scoreboard. No API key required.
exports.handler = async (event) => {
  const month = event.queryStringParameters?.month || '';
  if (!/^202[67]-(0[1-9]|1[0-2])$/.test(month) || month < '2026-10' || month > '2027-06') {
    return {statusCode:400,body:JSON.stringify({error:'Month must be within the 2026–27 NBA season'})};
  }
  const [year, m] = month.split('-').map(Number);
  // Add UTC days on each side: games just after midnight in Manila belong to the next local date.
  const day = (d) => d.toISOString().slice(0,10).replaceAll('-','');
  const start = day(new Date(Date.UTC(year,m-1,0)));
  const end = day(new Date(Date.UTC(year,m,2)));
  const url = `https://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard?dates=${start}-${end}&limit=600`;
  try {
    const upstream = await fetch(url,{headers:{Accept:'application/json','User-Agent':'NBAPhCalendar/2.0'},signal:AbortSignal.timeout(14000)});
    if(!upstream.ok) throw Error(`ESPN status ${upstream.status}`);
    const data = await upstream.json();
    if(!Array.isArray(data.events)) throw Error('Malformed NBA data');
    // Return only minimum required fields; never trust user supplied URLs.
    const events = data.events.map(e => {
      const c = e.competitions?.[0] || {};
      const sides = (c.competitors || []).map(s => ({
        abbr: s.team?.abbreviation || '',
        name: s.team?.displayName || '',
        homeAway: s.homeAway,
        score: s.score?.displayValue ?? (typeof s.score === 'string' ? s.score : null),
        winner: Boolean(s.winner)
      }));
      return {id:String(e.id||''),utc:e.date||c.date,teams:sides,status:c.status?.type?.state||e.status?.type?.state||'pre',detail:c.status?.type?.shortDetail||'',venue:c.venue?.fullName||''};
    }).filter(g => g.utc && g.teams.length === 2);
    return {statusCode:200,headers:{'Content-Type':'application/json; charset=utf-8','Cache-Control':'public, max-age=60, s-maxage=300, stale-while-revalidate=600'},body:JSON.stringify({month,events,source:'ESPN NBA scoreboard'})};
  } catch (err) {
    return {statusCode:502,headers:{'Content-Type':'application/json'},body:JSON.stringify({error:'Scoreboard currently unavailable. Please retry.'})};
  }
};
