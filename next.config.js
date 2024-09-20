const withPlugins = require('next-compose-plugins');
const optimizedImages = require('next-optimized-images');

module.exports = withPlugins([optimizedImages], {
    webpack(config, { dev, isServer }) {
        if (dev) {
            config.devtool = false;
            config.cache = {
                type: 'filesystem',
            };
        }
        return config;
    },
});
