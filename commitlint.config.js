export default {
    extends: ['@commitlint/config-conventional'],
    rules: {
      'body-max-line-length': [0, 'always'], // Disable line length restriction
      'footer-max-line-length': [0, 'always'], // Disable line length restriction
    },
  };