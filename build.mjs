import {build} from 'esbuild';
import {mkdir,copyFile,cp,writeFile,readFile} from 'node:fs/promises';
await mkdir('dist',{recursive:true});
await build({entryPoints:['src/main.tsx'],bundle:true,minify:true,outfile:'dist/app.js',format:'iife',target:'es2022',define:{'process.env.NODE_ENV':'"production"'},legalComments:'none'});
await copyFile('index.html','dist/index.html'); await cp('public','dist',{recursive:true});
// Downloadable, reproducible source snapshot for GitHub or local development.
const files=['package.json','package-lock.json','tsconfig.json','build.mjs','index.html','README.md','src/main.tsx','src/engine.ts','src/engine.test.ts','src/lessons.ts','src/style.css','public/sw.js','public/manifest.webmanifest','public/icon.svg'];
const snapshot={format:'pm-fieldlab-source-v2',files:Object.fromEntries(await Promise.all(files.map(async f=>[f,await readFile(f,'utf8')])))};
await writeFile('dist/source.json',JSON.stringify(snapshot));
