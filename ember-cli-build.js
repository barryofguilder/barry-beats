'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');
const { join } = require('path');
const isProduction = EmberApp.env() === 'production';

const purgeCSS = {
  module: require('@fullhuman/postcss-purgecss'),
  options: {
    content: [
      // Specify all paths in the application that include Tailwind classes.
      join(__dirname, 'app', 'index.html'),
      join(__dirname, 'app', '**', '*.css'),
      join(__dirname, 'app', '**', '*.hbs'),
      join(__dirname, 'app', '**', '*.js'),
    ],

    // Include any special characters you're using in this regular expression.
    defaultExtractor: (content) =>
      content.match(/[^<>"'`\s]*[^<>"'`\s:]/g) || [],
  },
};

module.exports = function (defaults) {
  let app = new EmberApp(defaults, {
    postcssOptions: {
      compile: {
        plugins: [
          {
            module: require('postcss-import'),
            options: {
              path: ['node_modules'],
            },
          },
          require('tailwindcss')('app/tailwind.config.js'),
          require('autoprefixer'),
          ...(isProduction ? [purgeCSS] : []),
        ],
      },
    },
  });

  // Use `app.import` to add additional libraries to the generated
  // output files.
  //
  // If you need to use different assets in different
  // environments, specify an object as the first parameter. That
  // object's keys should be the environment name and the values
  // should be the asset to use in that environment.
  //
  // If the library that you are including contains AMD or ES6
  // modules that you would like to import into your application
  // please specify an object with the list of modules as keys
  // along with the exports of each module as its value.

  const { Webpack } = require('@embroider/webpack');
  return require('@embroider/compat').compatBuild(app, Webpack, {
    // staticAddonTestSupportTrees: true,
    // staticAddonTrees: true,
    // staticHelpers: true,
    // staticComponents: true,
    // splitAtRoutes: ['route.name'], // can also be a RegExp
    // packagerOptions: {
    //    webpackConfig: { }
    // }
  });
};
