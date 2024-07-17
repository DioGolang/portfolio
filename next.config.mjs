import { withSentryConfig } from '@sentry/nextjs';
import dotenv from 'dotenv';

dotenv.config({ path: './.env' });

dotenv.config({ path: './.env.sentry-build-plugin' });

/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
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
