module.exports = {
    // Удаление ненужной конфигурации
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
