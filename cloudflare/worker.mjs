export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    if (url.hostname === 'www.engenhogeo.com.br' ||
        (url.hostname === 'engenhogeo.com.br' && url.protocol !== 'https:')) {
      url.hostname = 'engenhogeo.com.br';
      url.protocol = 'https:';
      return Response.redirect(url.toString(), 301);
    }
    const asset = await env.ASSETS.fetch(request);
    const response = new Response(asset.body, asset);
    response.headers.set('X-Content-Type-Options', 'nosniff');
    response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');
    response.headers.set('X-EngenhoGeo-Hosting', 'Cloudflare Workers');
    if (url.hostname.endsWith('.workers.dev')) {
      response.headers.set('X-Robots-Tag', 'noindex, follow');
    }
    return response;
  },
};
