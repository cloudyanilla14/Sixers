// Server-side proxy avoids browser CORS limitations. Netlify automatically deploys this function.
exports.handler=async function(){
  try{
    const url='https://site.api.espn.com/apis/site/v2/sports/basketball/nba/teams/phi/schedule?season=2027&seasontype=2';
    const response=await fetch(url,{headers:{'Accept':'application/json','User-Agent':'SixersPHCalendar/1.0'}});
    if(!response.ok)throw new Error('ESPN returned '+response.status);
    const json=await response.json();
    return {statusCode:200,headers:{'Content-Type':'application/json','Cache-Control':'public, max-age=300, s-maxage=600'},body:JSON.stringify({events:json.events||[]})};
  }catch(err){return {statusCode:502,headers:{'Content-Type':'application/json'},body:JSON.stringify({error:'Live schedule temporarily unavailable'})}}
};
