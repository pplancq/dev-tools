import { getInteractiveArgs } from '@/steps/getInteractiveArgs';
import { confirm, text } from '@clack/prompts';
import { describe, expect, it, type Mock } from 'vitest';

describe('getInteractiveArgs', () => {
  it('returns the provided projectName when specified', async () => {
    const { projectName } = await getInteractiveArgs({ projectName: 'my-app' });

    expect(projectName).toStrictEqual('my-app');
  });

  it('prompts for projectName when not provided', async () => {
    (text as Mock).mockResolvedValueOnce('my-project');
    const { projectName } = await getInteractiveArgs({});

    expect(projectName).toStrictEqual('my-project');
  });

  it('returns the provided skipDepInstall when specified', async () => {
    (text as Mock).mockResolvedValueOnce('my-project');
    const { skipDepInstall } = await getInteractiveArgs({ skipDepInstall: true });

    expect(skipDepInstall).toBeTruthy();
  });

  it('prompts for skipDepInstall when not provided', async () => {
    (text as Mock).mockResolvedValueOnce('my-project');
    (confirm as Mock).mockResolvedValueOnce(true);
    const { skipDepInstall } = await getInteractiveArgs({});

    expect(skipDepInstall).toBeTruthy();
  });
});
