export const api = {
  icon: '巛',
  name: 'cname.do',
  description: 'Dynamic CNAME Service',
  url: 'https://cname.do/api',
  type: 'https://apis.do/domains',
  endpoints: {
    list: 'https://cname.do/list',
    get: 'https://cname.do/:id',
  },
  site: 'https://cname.do',
  login: 'https://cname.do/login',
  signup: 'https://cname.do/signup',
  subscribe: 'https://cname.do/subscribe',
  repo: 'https://github.com/drivly/cname.do',
}

export default {
  fetch: async (req, env) => {
    const { user, origin, requestId, method, body, time, pathname, pathSegments, pathOptions, url, query } = await env.CTX.fetch(req).then(res => res.json())
    

    return new Response(JSON.stringify({ api, url, pathSegments, pathOptions, methods, user }, null, 2), { headers: { 'content-type': 'application/json; charset=utf-8' }})
  },
}
