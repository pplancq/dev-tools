import { endProcess } from '@/helpers/endProcess';
import { cancel, isCancel } from '@clack/prompts';

export const checkCancel = <V>(value: V): V => {
  if (isCancel(value)) {
    cancel('Operation cancelled.');
    endProcess();
  }

  return value;
};
