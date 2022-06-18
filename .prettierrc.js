module.exports = {
  semi: false,
  singleQuote: true,
  trailingComma: 'es5',
  overrides: [
    {
      files: ['*.yaml', '*.yml'],
      options: {
        tabWidth: 4,
        printWidth: 88,
      },
    },
    {
      files: ['*.md'],
      options: {
        // There is currently a bug that causes affect text alignment after the bullet
        // points in markdown
        // https://github.com/prettier/prettier/issues/5019
        tabWidth: 4,
      },
    },
  ],
}
