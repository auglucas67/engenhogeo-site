import { spawnSync } from 'node:child_process';
import { createRequire } from 'node:module';
import { readFileSync, existsSync } from 'node:fs';

const require = createRequire(import.meta.url);
const result = spawnSync(process.execPath, [require.resolve('next/dist/bin/next'), 'build'], {
  stdio: 'inherit',
  env: { ...process.env, CLOUDFLARE_STATIC_EXPORT: '1', NEXT_TELEMETRY_DISABLED: '1' },
});
if (result.error) throw result.error;
if (result.status !== 0) process.exit(result.status ?? 1);

for (const path of ['index.html', 'quem-somos.html', 'servicos.html', 'cases.html', 'clientes.html', 'contato.html', '404.html', 'robots.txt', 'sitemap.xml']) {
  if (!existsSync(`out/${path}`)) throw new Error(`Arquivo exportado ausente: ${path}`);
}
const sitemap = readFileSync('out/sitemap.xml', 'utf8');
if (!sitemap.includes('https://engenhogeo.com.br')) throw new Error('Domínio canônico ausente do sitemap.');
console.log('Seis páginas, página 404, robots.txt e sitemap validados para Cloudflare.');
