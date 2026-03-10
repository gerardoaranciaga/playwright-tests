// playwright.config.ts
import { defineConfig } from '@playwright/test';

export default defineConfig({
  reporter: [
    ['list'],
    ['html', { outputFolder: 'test-results/my-html-report', open: 'never' }],
    ['json', { outputFile: 'test-results/results.json' }]
  ],
  outputDir: 'test-results',
});