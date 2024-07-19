import { withSentryConfig } from '@sentry/nextjs';
import dotenv from 'dotenv';

// Loading additional environment variables if necessary
dotenv.config({ path: './.env' });
dotenv.config({ path: './.env.sentry-build-plugin' });

const nextConfig = {
    basePath: '/portfolio',
    assetPrefix: '/portfolio/',
    distDir: 'out',
    env: {
        SENTRY_DSN: process.env.SENTRY_DSN,
    },
};

const sentryOptions = {
    org: "local-web-imoveis",
    project: "javascript-nextjs",
    silent: !process.env.CI,
    widenClientFileUpload: true,
    hideSourceMaps: true,
    disableLogger: true,
    automaticVercelMonitors: true,
};

export default withSentryConfig(nextConfig, sentryOptions);