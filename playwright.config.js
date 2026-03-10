// @ts-check
import { defineConfig, devices } from '@playwright/test';
import { on } from 'events';

/**
 * @see https://playwright.dev/docs/test-configuration
 */
const config = ({
  testDir: './tests',
  timeout: 30*1000,
  expect : {
    timeout: 5000,
  },

  reporter: 'html',

  use: {


    browserName: 'chromium', 
    headless: false,
    screenshot: 'on',
    trace:'on',
    //video: 'retain-on-failure'

  },

  
});

module.exports = config

