const path = require('path');

module.exports = function (config) {
  config.set({
    // ... tu configuración ...
    esbuild: {
      target: 'es2022',
      jsx: 'automatic',
      jsxDev: true,
      sourcemap: 'inline',
      tsconfig: 'tsconfig.app.json',
      define: { 'process.env.NODE_ENV': '"test"' },
      loader: {
        '.svg': 'text',
        '.png': 'dataurl',
        '.jpg': 'dataurl',
      },
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },
  });
};
