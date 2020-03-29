module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
    ...(process.env.NODE_ENV === 'production'
      ? {
          '@fullhuman/postcss-purgecss': {
            content: [
              './components/**/*.tsx',
              './pages/**/*.tsx',
              './components/**/*.ts',
              './pages/**/*.ts'
            ],
            defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
          }
        }
      : {})
  }
};
