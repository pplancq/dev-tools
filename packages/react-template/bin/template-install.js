#!/usr/bin/env node
import { readFileSync, renameSync, rmSync, writeFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const repoDir = resolve(fileURLToPath(import.meta.url), '../..');
const projectName = process.argv[2] || 'react-app';

const repoPackageJson = JSON.parse(readFileSync(resolve(repoDir, 'package.json'), { encoding: 'utf-8' }));

repoPackageJson.name = projectName;
repoPackageJson.description = projectName;
const { _prepare, _postinstall, ...scripts } = repoPackageJson.scripts;
repoPackageJson.scripts = { ...scripts, prepare: _prepare, postinstall: _postinstall };
repoPackageJson.version = '0.1.0';
delete repoPackageJson.author;
delete repoPackageJson.repository;
delete repoPackageJson.bugs;
delete repoPackageJson.keywords;
delete repoPackageJson.engines;
delete repoPackageJson.bin;

writeFileSync(resolve(repoDir, 'package.json'), JSON.stringify(repoPackageJson, null, 2), { encoding: 'utf-8' });

renameSync(`${repoDir}/_gitignore`, `${repoDir}/.gitignore`);
renameSync(`${repoDir}/_README.md`, `${repoDir}/README.md`);

rmSync(`${repoDir}/LICENSE`);
rmSync(`${repoDir}/CHANGELOG.md`);
rmSync(`${repoDir}/bin`, { recursive: true });
