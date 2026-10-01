import { build } from 'vite';
import react from '@vitejs/plugin-react';
import { readFile, writeFile, mkdir } from 'node:fs/promises';
import { resolve, join } from 'node:path';
import { pathToFileURL } from 'node:url';

const output = resolve('dist');
const serverOutput = resolve('dist-ssr');
await build({
  configFile: false,
  plugins: [react()],
  build: { ssr: 'src/entry-server.jsx', outDir: serverOutput, emptyOutDir: true },
});
const { render, pages, getPageSeo, getStructuredData } = await import(pathToFileURL(join(serverOutput, 'entry-server.js')).href);
const template = await readFile(join(output, 'index.html'), 'utf8');
const escape = value => value.replaceAll('&', '&amp;').replaceAll('"', '&quot;').replaceAll('<', '&lt;').replaceAll('>', '&gt;');
for (const pathname of [...Object.keys(pages), '/404']) {
  const seo = getPageSeo(pathname);
  let html = template.replace('<div id="root"></div>', () => `<div id="root">${render(pathname)}</div>`);
  html = html.replace(/<title>.*?<\/title>/s, `<title>${escape(seo.title)}</title>`);
  for (const [attribute, name, value] of [
    ['name', 'description', seo.description], ['name', 'robots', seo.robots],
    ['property', 'og:title', seo.title], ['property', 'og:description', seo.description], ['property', 'og:url', seo.url],
    ['name', 'twitter:title', seo.title], ['name', 'twitter:description', seo.description],
  ]) {
    html = html.replace(new RegExp(`<meta ${attribute}="${name}"[^>]*>`), `<meta ${attribute}="${name}" content="${escape(value)}" />`);
  }
  html = html.replace(/<link rel="canonical"[^>]*>/, `<link rel="canonical" href="${seo.url}" />`);
  html = html.replace(/<script id="structured-data" type="application\/ld\+json">.*?<\/script>/s,
    () => `<script id="structured-data" type="application/ld+json">${JSON.stringify(getStructuredData(pathname)).replaceAll('<', '\\u003c')}</script>`);
  const destination = pathname === '/404' ? join(output, '404.html') : join(output, pathname.slice(1), 'index.html');
  await mkdir(resolve(destination, '..'), { recursive: true });
  await writeFile(destination, html);
  console.log(`HTML pré-rendu : ${pathname}`);
}
