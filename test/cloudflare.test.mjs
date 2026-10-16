import test from 'node:test';
import assert from 'node:assert/strict';
import worker from '../cloudflare/worker.mjs';

test('www redirects permanently to the canonical domain, preserving path and query', async () => {
  const response = await worker.fetch(new Request('https://www.engenhogeo.com.br/servicos?origem=teste'), {});
  assert.equal(response.status, 301);
  assert.equal(response.headers.get('location'), 'https://engenhogeo.com.br/servicos?origem=teste');
});

test('HTTP redirects to HTTPS on the canonical domain', async () => {
  const response = await worker.fetch(new Request('http://engenhogeo.com.br/contato'), {});
  assert.equal(response.headers.get('location'), 'https://engenhogeo.com.br/contato');
});

test('temporary hostname is noindex; production permits indexation', async () => {
  const env = { ASSETS: { fetch: async () => new Response('<h1>EngenhoGeo</h1>') } };
  const preview = await worker.fetch(new Request('https://engenhogeo.auglucas.workers.dev/'), env);
  assert.equal(preview.headers.get('x-robots-tag'), 'noindex, follow');
  const production = await worker.fetch(new Request('https://engenhogeo.com.br/'), env);
  assert.equal(production.headers.get('x-robots-tag'), null);
  assert.equal(production.headers.get('x-engenhogeo-hosting'), 'Cloudflare Workers');
});

test('missing pages keep status 404', async () => {
  const response = await worker.fetch(new Request('https://engenhogeo.com.br/ausente'), {
    ASSETS: { fetch: async () => new Response('Página não encontrada', { status: 404 }) },
  });
  assert.equal(response.status, 404);
});
