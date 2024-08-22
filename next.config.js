module.exports = {
    // Настройка webpackDevMiddleware
    webpackDevMiddleware: config => {
        if (process.env.NEXT_DISABLE_HMR === 'true') {
            config.watchOptions = {
                poll: 300,
                aggregateTimeout: 300,
            };
        }
        return config;
    },

    // Настройка webpack
    webpack(config, { dev, isServer }) {
        if (!dev && !isServer) {
            config.optimization.minimize = false; // Отключение минимизации
            config.optimization.splitChunks = false; // Отключение разбиения на чанки
            config.optimization.runtimeChunk = false;
        }
        return config;
    },
};
