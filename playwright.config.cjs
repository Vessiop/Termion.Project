const { defineConfig, devices } = require('@playwright/test');

module.exports = defineConfig({
    testDir: './tests',
    timeout: 45000,
    expect: { timeout: 8000 },
    fullyParallel: false,
    workers: 1,
    reporter: 'list',
    use: {
        baseURL: 'http://127.0.0.1:4173',
        channel: 'msedge',
        trace: 'retain-on-failure'
    },
    projects: [
        { name: 'desktop', use: { viewport: { width: 1440, height: 900 } } },
        { name: 'mobile', use: { ...devices['Pixel 7'] } }
    ],
    webServer: {
        command: 'node tests/server.cjs',
        url: 'http://127.0.0.1:4173',
        reuseExistingServer: false
    }
});
