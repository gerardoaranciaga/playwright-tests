// @ts-check
import { defineConfig, devices } from '@playwright/test';
import { on } from 'events';

/**
 * @see https://playwright.dev/docs/test-configuration
 */
const config = ({
  testDir: './tests',
  retries: 2,
  workers: 4,
  timeout: 30000,
  expect : {
    timeout: 5000,
  },

  reporter: [
    ['html'],
    ['github']
  ],

  use: {

    browserName: 'chromium', 
    headless: true,
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    trace: 'on-first-retry',

  },

   

});

module.exports = config

