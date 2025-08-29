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

  it('returns the provided skipGitInit when specified', async () => {
    (text as Mock).mockResolvedValueOnce('my-project');
    const { skipGitInit } = await getInteractiveArgs({ skipGitInit: true });

    expect(skipGitInit).toBeTruthy();
  });

  it('prompts for skipGitInit when not provided', async () => {
    (text as Mock).mockResolvedValueOnce('my-project');
    (confirm as Mock).mockResolvedValueOnce(false).mockResolvedValueOnce(true);
    const { skipGitInit } = await getInteractiveArgs({});

    expect(skipGitInit).toBeTruthy();
  });

  it('returns the provided template when specified', async () => {
    (text as Mock).mockResolvedValueOnce('my-project');
    (confirm as Mock).mockResolvedValue(false);
    const { template } = await getInteractiveArgs({ template: 'custom-template' });

    expect(template).toStrictEqual('custom-template');
  });

  it('prompts for template when not provided and useCustomTemplate is true', async () => {
    (text as Mock).mockResolvedValueOnce('my-project');
    (confirm as Mock).mockResolvedValue(true);
    (text as Mock).mockResolvedValueOnce('custom-template');
    const { template } = await getInteractiveArgs({});

    expect(template).toStrictEqual('custom-template');
  });
});
