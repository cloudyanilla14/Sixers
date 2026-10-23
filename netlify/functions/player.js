// HOOPD v5: proxy player data server-side to avoid browser CORS failures.
exports.handler = async (event) => {
 const q=event.queryStringParameters||{};const id=String(q.id||'');
 if(!/^\d{1,10}$/.test(id)||!['details','bio','overview','stats'].includes(q.kind)) return {statusCode:400,body:JSON.stringify({error:'Invalid player request'})};
 const season=Number(q.season||2026),type=Number(q.seasontype||2);
 if(q.kind==='stats'&&(!Number.isInteger(season)||season<1947||season>2035||![2,3].includes(type)))return {statusCode:400,body:'Invalid season'};
 const root='https://site.web.api.espn.com/apis/common/v3/sports/basketball/nba/athletes/'+id;
 const url=q.kind==='details'?'https://site.api.espn.com/apis/site/v2/sports/basketball/nba/athletes/'+id:q.kind==='stats'?root+'/stats?season='+season+'&seasontype='+type:root+'/'+q.kind;
 try{const res=await fetch(url,{headers:{'Accept':'application/json','User-Agent':'HOOPD-Fan-Calendar/5.0'},signal:AbortSignal.timeout(9500)});
 const body=await res.text();return {statusCode:res.status,headers:{'Content-Type':'application/json','Cache-Control':res.ok?'public,max-age=300,s-maxage=1800':'no-store','Access-Control-Allow-Origin':'*'},body};}
 catch(err){return{statusCode:502,headers:{'Content-Type':'application/json'},body:JSON.stringify({error:'ESPN unavailable',detail:String(err.message)})}};
};
