/*
 * Copyright (c) 2022 pikokr. Licensed under the MIT License.
 */

/** @type {import('next').NextConfig} */
const { withContentlayer } = require('next-contentlayer')
const nextConfig = {
  reactStrictMode: true,
}

module.exports = withContentlayer()(nextConfig)
