#!/usr/bin/env node
import { endProcess } from '@/helpers/endProcess';
import { main } from '@/main';
import { log, outro } from '@clack/prompts';

try {
  await main();
  outro('Happy hacking!');
  endProcess();
} catch (error: unknown) {
  log.error((error as Error).message);
  outro('Please check and try again.');
  endProcess(true);
}
