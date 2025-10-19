module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine'],
    files: [
      { pattern: 'src/**/*.test.ts?(x)', watched: false },
    ],
    preprocessors: {
      'src/**/*.test.ts': ['esbuild'],
      'src/**/*.test.tsx': ['esbuild'],
    },
    esbuild: {
      target: 'es2022',
      format: 'esm',
      jsx: 'automatic',
      jsxDev: false,          
      sourcemap: 'inline',
      tsconfig: 'tsconfig.app.json',
      define: {
        'process.env.NODE_ENV': '"test"',
      },
      loader: {
        '.svg': 'text',
        '.png': 'dataurl',
        '.jpg': 'dataurl',
      },
    },
    reporters: ['spec'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: false,
    browsers: ['ChromeHeadless'],
    singleRun: true,
    concurrency: Infinity,
    browserNoActivityTimeout: 60000,  
    captureTimeout: 120000,            
    plugins: [
      'karma-jasmine',
      'karma-chrome-launcher',
      'karma-spec-reporter',
      'karma-esbuild',
    ],
    client: {
      jasmine: { random: false, timeoutInterval: 10000 },  
      clearContext: false,
      captureConsole: true,  
    },
    mime: { 'text/x-typescript': ['ts', 'tsx'] },
  })
}
