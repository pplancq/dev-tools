#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Load all rule files
const baseRules = require('../rules/base');
const importRules = require('../rules/import');
const typescriptRules = require('../rules/typescript');
const reactRules = require('../rules/react');
const reactJsxA11yRules = require('../rules/react-jsx-a11y');
const vitestRules = require('../rules/vitest');
const playwrightRules = require('../rules/playwright');
const prettierRules = require('../rules/prettier');

// Function to get plugin name from rule name
function getPluginName(ruleName) {
  if (ruleName.startsWith('@typescript-eslint/')) {
    return '@typescript-eslint/eslint-plugin';
  }
  if (ruleName.startsWith('import/')) {
    return 'eslint-plugin-import';
  }
  if (ruleName.startsWith('react/') || ruleName.startsWith('react-hooks/')) {
    return 'eslint-plugin-react';
  }
  if (ruleName.startsWith('jsx-a11y/')) {
    return 'eslint-plugin-jsx-a11y';
  }
  if (ruleName.startsWith('@vitest/')) {
    return '@vitest/eslint-plugin';
  }
  if (ruleName.startsWith('playwright/')) {
    return 'eslint-plugin-playwright';
  }
  if (ruleName.startsWith('prettier/')) {
    return 'eslint-plugin-prettier';
  }
  if (ruleName.startsWith('jest-dom/')) {
    return 'eslint-plugin-jest-dom';
  }
  if (ruleName.startsWith('testing-library/')) {
    return 'eslint-plugin-testing-library';
  }
  return 'eslint (core)';
}

// Function to get documentation URL for a rule
function getRuleDocUrl(ruleName) {
  if (ruleName.startsWith('@typescript-eslint/')) {
    const rule = ruleName.replace('@typescript-eslint/', '');
    return `https://typescript-eslint.io/rules/${rule}`;
  }
  if (ruleName.startsWith('import/')) {
    const rule = ruleName.replace('import/', '');
    return `https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/${rule}.md`;
  }
  if (ruleName.startsWith('react/')) {
    const rule = ruleName.replace('react/', '');
    return `https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/${rule}.md`;
  }
  if (ruleName.startsWith('react-hooks/')) {
    const rule = ruleName.replace('react-hooks/', '');
    return `https://github.com/facebook/react/blob/main/packages/eslint-plugin-react-hooks/README.md#${rule}`;
  }
  if (ruleName.startsWith('jsx-a11y/')) {
    const rule = ruleName.replace('jsx-a11y/', '');
    return `https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/${rule}.md`;
  }
  if (ruleName.startsWith('@vitest/')) {
    const rule = ruleName.replace('@vitest/', '');
    return `https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/${rule}.md`;
  }
  if (ruleName.startsWith('playwright/')) {
    const rule = ruleName.replace('playwright/', '');
    return `https://github.com/playwright-community/eslint-plugin-playwright/blob/main/docs/rules/${rule}.md`;
  }
  if (ruleName.startsWith('prettier/')) {
    const rule = ruleName.replace('prettier/', '');
    return `https://github.com/prettier/eslint-plugin-prettier#${rule}`;
  }
  if (ruleName.startsWith('jest-dom/')) {
    const rule = ruleName.replace('jest-dom/', '');
    return `https://github.com/testing-library/eslint-plugin-jest-dom/blob/main/docs/rules/${rule}.md`;
  }
  if (ruleName.startsWith('testing-library/')) {
    const rule = ruleName.replace('testing-library/', '');
    return `https://github.com/testing-library/eslint-plugin-testing-library/blob/main/docs/rules/${rule}.md`;
  }
  // Core ESLint rules
  return `https://eslint.org/docs/latest/rules/${ruleName}`;
}

// Function to extract description from a comment line
function extractDescription(ruleName, ruleFile) {
  const fileContent = fs.readFileSync(ruleFile, 'utf8');
  const lines = fileContent.split('\n');

  // Find the rule name in the file
  const rulePattern = new RegExp(`['"]${ruleName.replace('/', '\\/')}['"]:`);
  let descriptionLine = null;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    if (rulePattern.test(line)) {
      // Look backwards for comments
      for (let j = i - 1; j >= 0; j--) {
        const prevLine = lines[j].trim();
        if (prevLine.startsWith('//')) {
          // Extract the description from the comment
          const desc = prevLine.replace(/^\/\/\s*/, '').trim();
          // Skip URLs
          if (!desc.startsWith('http')) {
            descriptionLine = desc;
          }
        } else if (prevLine !== '' && !prevLine.startsWith('//')) {
          break;
        }
      }
      break;
    }
  }

  return descriptionLine || '';
}

// Function to process rules and filter only warn/error
function processRules(rulesConfig, ruleFile) {
  const rules = [];
  const rulesObj = rulesConfig.rules || {};

  Object.entries(rulesObj).forEach(([ruleName, ruleValue]) => {
    const severity = Array.isArray(ruleValue) ? ruleValue[0] : ruleValue;

    // Only include warn and error rules
    if (severity === 'warn' || severity === 'error' || severity === 2 || severity === 1) {
      const mode = severity === 'error' || severity === 2 ? 'error' : 'warn';
      const description = extractDescription(ruleName, ruleFile);

      rules.push({
        name: ruleName,
        mode,
        description,
        plugin: getPluginName(ruleName),
        url: getRuleDocUrl(ruleName),
      });
    }
  });

  return rules.sort((a, b) => a.name.localeCompare(b.name));
}

// Generate markdown table
function generateMarkdownTable(rules) {
  if (rules.length === 0) {
    return 'Aucune règle active.\n';
  }

  let markdown = '| Règle | Mode | Description | Plugin |\n';
  markdown += '|-------|------|-------------|--------|\n';

  rules.forEach(rule => {
    const name = `[${rule.name}](${rule.url})`;
    const { mode } = rule;
    const description = rule.description || '-';
    const { plugin } = rule;

    markdown += `| ${name} | ${mode} | ${description} | ${plugin} |\n`;
  });

  return markdown;
}

// Main function to generate documentation
function generateDocumentation() {
  const rootDir = path.join(__dirname, '..');
  const docsDir = path.join(rootDir, 'docs');

  // Create docs directory if it doesn't exist
  if (!fs.existsSync(docsDir)) {
    fs.mkdirSync(docsDir, { recursive: true });
  }

  // Process each configuration section
  console.info('Processing base rules...');
  const baseRulesProcessed = processRules(baseRules.baseRules, path.join(rootDir, 'rules', 'base.js'));
  const importRulesProcessed = processRules(importRules.importRules, path.join(rootDir, 'rules', 'import.js'));
  const typescriptRulesProcessed = processRules(
    typescriptRules.typescriptRules,
    path.join(rootDir, 'rules', 'typescript.js'),
  );

  console.info('Processing React rules...');
  const reactRulesProcessed = processRules(reactRules.reactRules, path.join(rootDir, 'rules', 'react.js'));
  const reactTypescriptRulesProcessed = processRules(
    reactRules.reactTypescriptRules,
    path.join(rootDir, 'rules', 'react.js'),
  );
  const reactTestRulesProcessed = processRules(reactRules.reactTestRules, path.join(rootDir, 'rules', 'react.js'));
  const reactJsxA11yRulesProcessed = processRules(
    reactJsxA11yRules.reactJsxA11yRules,
    path.join(rootDir, 'rules', 'react-jsx-a11y.js'),
  );

  console.info('Processing Vitest rules...');
  const vitestRulesProcessed = processRules(vitestRules.vitestRules, path.join(rootDir, 'rules', 'vitest.js'));

  console.info('Processing Playwright rules...');
  const playwrightRulesProcessed = processRules(
    playwrightRules.playwrightRules,
    path.join(rootDir, 'rules', 'playwright.js'),
  );

  console.info('Processing Prettier rules...');
  const prettierRulesProcessed = processRules(prettierRules.prettierRules, path.join(rootDir, 'rules', 'prettier.js'));

  // Combine all base rules (base + import + typescript)
  const allBaseRules = [...baseRulesProcessed, ...importRulesProcessed, ...typescriptRulesProcessed];

  // Combine all React rules
  const allReactRules = [
    ...reactRulesProcessed,
    ...reactTypescriptRulesProcessed,
    ...reactTestRulesProcessed,
    ...reactJsxA11yRulesProcessed,
  ];

  // Generate markdown content
  let markdown = '# Documentation des Règles ESLint\n\n';
  markdown +=
    'Cette documentation liste toutes les règles ESLint actives dans la configuration `@pplancq/eslint-config`.\n\n';
  markdown += '## Table des Matières\n\n';
  markdown += '- [Configuration de Base](#configuration-de-base)\n';
  markdown += '- [Configuration React](#configuration-react)\n';
  markdown += '- [Configuration Vitest](#configuration-vitest)\n';
  markdown += '- [Configuration Playwright](#configuration-playwright)\n';
  markdown += '- [Configuration Prettier](#configuration-prettier)\n\n';

  markdown += '## Configuration de Base\n\n';
  markdown += 'Règles actives avec `defineConfig()` (configuration par défaut).\n\n';
  markdown += "Cette configuration inclut les règles de base, les règles d'import et les règles TypeScript.\n\n";
  markdown += generateMarkdownTable(allBaseRules);
  markdown += '\n';

  markdown += '## Configuration React\n\n';
  markdown += 'Règles additionnelles actives avec `defineConfig({ enableReact: true })`.\n\n';
  markdown +=
    'Cette configuration ajoute les règles React, React Hooks, JSX a11y et Testing Library aux règles de base.\n\n';
  markdown += generateMarkdownTable(allReactRules);
  markdown += '\n';

  markdown += '## Configuration Vitest\n\n';
  markdown += 'Règles additionnelles actives avec `defineConfig({ enableVitest: true })`.\n\n';
  markdown += generateMarkdownTable(vitestRulesProcessed);
  markdown += '\n';

  markdown += '## Configuration Playwright\n\n';
  markdown += 'Règles additionnelles actives avec `defineConfig({ enablePlaywright: true })`.\n\n';
  markdown += generateMarkdownTable(playwrightRulesProcessed);
  markdown += '\n';

  markdown += '## Configuration Prettier\n\n';
  markdown += "Règles additionnelles actives avec `defineConfig({ enablePrettier: 'on' })`.\n\n";
  markdown += 'Cette configuration active Prettier et désactive les règles de formatage conflictuelles.\n\n';
  markdown += generateMarkdownTable(prettierRulesProcessed);
  markdown += '\n';

  // Write to file
  const outputPath = path.join(docsDir, 'rules.md');
  fs.writeFileSync(outputPath, markdown);
  console.info(`Documentation generated successfully at ${outputPath}`);

  return outputPath;
}

// Run the generator
try {
  generateDocumentation();
  process.exit(0);
} catch (error) {
  console.error('Error generating documentation:', error);
  process.exit(1);
}
