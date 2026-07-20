export interface SetupGeneratorSchema {
  preset: 'simple' | 'monorepo-fixed' | 'monorepo-independent';
  projects: string;
}
