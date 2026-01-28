#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

/* eslint-disable no-underscore-dangle */
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
/* eslint-enable no-underscore-dangle */

/* eslint-disable import/extensions */
// Load all rule files
const baseRules = await import('../rules/base.js').then(m => m.default || m);
const importRules = await import('../rules/import.js').then(m => m.default || m);
const typescriptRules = await import('../rules/typescript.js').then(m => m.default || m);
const reactRules = await import('../rules/react.js').then(m => m.default || m);
const reactJsxA11yRules = await import('../rules/react-jsx-a11y.js').then(m => m.default || m);
const vitestRules = await import('../rules/vitest.js').then(m => m.default || m);
const playwrightRules = await import('../rules/playwright.js').then(m => m.default || m);
const prettierRules = await import('../rules/prettier.js').then(m => m.default || m);
/* eslint-enable import/extensions */

// Function to get plugin name from rule name
function getPluginName(ruleName) {
  switch (true) {
    case ruleName.startsWith('@typescript-eslint/'):
      return '@typescript-eslint/eslint-plugin';
    case ruleName.startsWith('import/'):
      return 'eslint-plugin-import';
    case ruleName.startsWith('react/'):
    case ruleName.startsWith('react-hooks/'):
      return 'eslint-plugin-react';
    case ruleName.startsWith('jsx-a11y/'):
      return 'eslint-plugin-jsx-a11y';
    case ruleName.startsWith('@vitest/'):
      return '@vitest/eslint-plugin';
    case ruleName.startsWith('playwright/'):
      return 'eslint-plugin-playwright';
    case ruleName.startsWith('prettier/'):
      return 'eslint-plugin-prettier';
    case ruleName.startsWith('jest-dom/'):
      return 'eslint-plugin-jest-dom';
    case ruleName.startsWith('testing-library/'):
      return 'eslint-plugin-testing-library';
    default:
      return 'eslint (core)';
  }
}

// Function to get documentation URL for a rule
function getRuleDocUrl(ruleName) {
  const getRuleName = prefix => ruleName.replace(prefix, '');

  switch (true) {
    case ruleName.startsWith('@typescript-eslint/'):
      return `https://typescript-eslint.io/rules/${getRuleName('@typescript-eslint/')}`;
    case ruleName.startsWith('import/'):
      return `https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/${getRuleName('import/')}.md`;
    case ruleName.startsWith('react-hooks/'):
      return `https://github.com/facebook/react/blob/main/packages/eslint-plugin-react-hooks/README.md#${getRuleName('react-hooks/')}`;
    case ruleName.startsWith('react/'):
      return `https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/${getRuleName('react/')}.md`;
    case ruleName.startsWith('jsx-a11y/'):
      return `https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/${getRuleName('jsx-a11y/')}.md`;
    case ruleName.startsWith('@vitest/'):
      return `https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/${getRuleName('@vitest/')}.md`;
    case ruleName.startsWith('playwright/'):
      return `https://github.com/playwright-community/eslint-plugin-playwright/blob/main/docs/rules/${getRuleName('playwright/')}.md`;
    case ruleName.startsWith('prettier/'):
      return `https://github.com/prettier/eslint-plugin-prettier#${getRuleName('prettier/')}`;
    case ruleName.startsWith('jest-dom/'):
      return `https://github.com/testing-library/eslint-plugin-jest-dom/blob/main/docs/rules/${getRuleName('jest-dom/')}.md`;
    case ruleName.startsWith('testing-library/'):
      return `https://github.com/testing-library/eslint-plugin-testing-library/blob/main/docs/rules/${getRuleName('testing-library/')}.md`;
    default:
      return `https://eslint.org/docs/latest/rules/${ruleName}`;
  }
}

// Function to extract description from a comment line
function extractDescription(ruleName, ruleFile) {
  const fileContent = fs.readFileSync(ruleFile, 'utf8');
  const lines = fileContent.split('\n');

  // Find the rule name in the file
  const rulePattern = new RegExp(String.raw`['"]${ruleName.replace('/', '/')}['"]:`);

  const ruleLineIndex = lines.findIndex(line => rulePattern.test(line));
  if (ruleLineIndex === -1) {
    return '';
  }

  // Look backwards for comments
  for (let j = ruleLineIndex - 1; j >= 0; j--) {
    const prevLine = lines[j].trim();

    // Stop when we hit non-comment, non-empty line
    if (!prevLine.startsWith('//') && prevLine !== '') {
      break;
    }

    // Skip non-comment lines
    if (prevLine.startsWith('//')) {
      // Extract the description from the comment
      const desc = prevLine.replace(/^\/\/\s*/, '').trim();

      // Skip URLs and empty lines, return first valid description
      if (!desc.startsWith('http') && desc.length > 0) {
        return desc;
      }
    }
  }

  return '';
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
    return 'No active rules.\n';
  }

  let markdown = '| Rule | Mode | Description | Plugin |\n';
  markdown += '|------|------|-------------|--------|\n';

  rules.forEach(rule => {
    const name = `[${rule.name}](${rule.url})`;
    const { mode } = rule;
    const description = rule.description || '-';
    const { plugin } = rule;

    markdown += `| ${name} | ${mode} | ${description} | ${plugin} |\n`;
  });

  return markdown;
}

// Function to replace content between markers in a file
function replaceBetweenMarkers(content, startMarker, endMarker, newContent) {
  const startIndex = content.indexOf(startMarker);
  const endIndex = content.indexOf(endMarker);

  if (startIndex === -1 || endIndex === -1) {
    throw new Error(`Markers ${startMarker} or ${endMarker} not found in the file`);
  }

  return `${content.substring(0, startIndex + startMarker.length)}\n${newContent}${content.substring(endIndex)}`;
}

// Main function to generate documentation
function generateDocumentation() {
  const rootDir = path.join(__dirname, '..');
  const docsDir = path.join(rootDir, 'docs');
  const outputPath = path.join(docsDir, 'rules.md');

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

  // Read the template file
  let content = fs.readFileSync(outputPath, 'utf8');

  // Replace content between markers
  content = replaceBetweenMarkers(
    content,
    '<!-- START_BASE_RULES -->',
    '<!-- END_BASE_RULES -->',
    generateMarkdownTable(allBaseRules),
  );
  content = replaceBetweenMarkers(
    content,
    '<!-- START_REACT_RULES -->',
    '<!-- END_REACT_RULES -->',
    generateMarkdownTable(allReactRules),
  );
  content = replaceBetweenMarkers(
    content,
    '<!-- START_VITEST_RULES -->',
    '<!-- END_VITEST_RULES -->',
    generateMarkdownTable(vitestRulesProcessed),
  );
  content = replaceBetweenMarkers(
    content,
    '<!-- START_PLAYWRIGHT_RULES -->',
    '<!-- END_PLAYWRIGHT_RULES -->',
    generateMarkdownTable(playwrightRulesProcessed),
  );
  content = replaceBetweenMarkers(
    content,
    '<!-- START_PRETTIER_RULES -->',
    '<!-- END_PRETTIER_RULES -->',
    generateMarkdownTable(prettierRulesProcessed),
  );

  // Write to file
  fs.writeFileSync(outputPath, content);

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
