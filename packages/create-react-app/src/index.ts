#!/usr/bin/env node
import { endProcess } from '@/helpers/endProcess';
import { main } from '@/main';
import { log, outro } from '@clack/prompts';

main()
  .then(() => {
    outro('Happy hacking!');
    endProcess();
  })
  .catch(error => {
    log.error(error.message);
    outro('Please check and try again.');
    endProcess(true);
  });
