// playwright.config.ts
import { defineConfig } from '@playwright/test';

export default defineConfig({
  reporter: [
    ['list'],
    ['html'],
    ['json', { outputFile: 'test-results/results.json' }]
  ],
  outputDir: 'test-results',
});