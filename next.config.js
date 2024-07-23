// next.config.js
module.exports = {
    webpackDevMiddleware: config => {
        if (process.env.NEXT_DISABLE_HMR === 'true') {
            config.watchOptions = {
                poll: 300,
                aggregateTimeout: 300,
            };
        }
        return config;
    },
};
