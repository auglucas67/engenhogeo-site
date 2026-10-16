# EngenhoGeo na Cloudflare

## Hospedagem

- Worker: `engenhogeo` na conta Cloudflare do proprietário.
- Endereço de verificação: https://engenhogeo.auglucas.workers.dev
- Domínio canônico: https://engenhogeo.com.br
- `www.engenhogeo.com.br` redireciona permanentemente para o domínio canônico, preservando caminho e parâmetros.
- A compilação exporta as seis páginas, contatos, logos, metadados, robots.txt, sitemap.xml e página 404 para `out/`.
- O endereço temporário recebe `X-Robots-Tag: noindex, follow`; o domínio público permanece indexável.
- Não há banco de dados nem segredos de execução nesta versão do site.

## Publicação

Use Node.js 22.13 ou superior e as versões do `pnpm-lock.yaml`.

```sh
pnpm install --frozen-lockfile
pnpm run build:cloudflare
node --test test/cloudflare.test.mjs
pnpm exec wrangler deploy --config wrangler.jsonc
```

No Cloudflare Workers Builds, conectar `auglucas67/engenhogeo-site`, branch `main`, com comando de build `npm run build:cloudflare` e comando de publicação `npx wrangler deploy --config wrangler.jsonc`. A gestão dos domínios personalizados fica no painel Cloudflare para evitar alterações DNS em cada publicação.

## DNS e conclusão da transferência

Servidores atribuídos pela Cloudflare:

- `christian.ns.cloudflare.com`
- `marlowe.ns.cloudflare.com`

O domínio estava hospedado no Render, com DNS no Registro.br. Antes de alterar os servidores, preservar todos os registros, incluindo a verificação TXT do Google. Nenhum registro MX foi encontrado no DNS original.

O DNSSEC original é assinado pelo Registro.br. Coordenar a transição das chaves e a atualização do registro DS; não manter a chave antiga junto dos novos servidores, pois isso causa falhas de validação DNS. Ao concluir a ativação, habilitar DNSSEC na Cloudflare e cadastrar o DS correspondente no Registro.br.

Não desligar o serviço anterior antes de verificar o domínio real, HTTPS, seis páginas, recursos estáticos, sitemap, robots.txt e redirecionamento www.

## Referência para recuperação

Configuração anterior, registrada antes da migração:

- DNS: `d.sec.dns.br`, `e.sec.dns.br`.
- `A engenhogeo.com.br`: `216.24.57.1`.
- `CNAME www.engenhogeo.com.br`: `engenhogeo.onrender.com`.
- Preservar o TXT de verificação Google existente.

Uma recuperação de DNS também exige coordenar DNSSEC. Não reaplicar apenas os registros DS sem verificar quem está assinando a zona.
