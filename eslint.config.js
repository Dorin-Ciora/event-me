// @ts-check
const eslint = require('@eslint/js');
const tseslint = require('typescript-eslint');
const angular = require('angular-eslint');
const boundaries = require('eslint-plugin-boundaries');

module.exports = tseslint.config(
  {
    files: ['event-me/*.ts'],
    plugins: {
      boundaries,
    },
    extends: [
      eslint.configs.recommended,
      ...tseslint.configs.recommended,
      ...tseslint.configs.stylistic,
      ...angular.configs.tsRecommended,
      boundaries.configs.strict,
    ],
    processor: angular.processInlineTemplates,
    rules: {
      'boundaries/element-types': [
        'error',
        {
          default: 'disallow',
          rules: [
            {
              from: 'main',
              allow: [['app', { app: '${from.app}' }]],
            },
            {
              from: 'core',
              allow: [
                ['lib-api'],
                ['env', { app: '${from.app}' }],
                ['core', { app: '${from.app}' }],
              ],
            },
            {
              from: 'ui',
              allow: [
                ['lib-api'],
                ['env', { app: '${from.app}' }],
                ['ui', { app: '${from.app}' }],
              ],
            },
            {
              from: 'layout',
              allow: [
                ['lib-api'],
                ['env', { app: '${from.app}' }],
                ['core', { app: '${from.app}' }],
                ['ui', { app: '${from.app}' }],
                ['pattern', { app: '${from.app}' }],
                ['layout', { app: '${from.app}' }],
              ],
            },
            {
              from: 'app',
              allow: [
                ['lib-api'],
                ['env', { app: '${from.app}' }],
                ['app', { app: '${from.app}' }],
                ['core', { app: '${from.app}' }],
                ['layout', { app: '${from.app}' }],
                ['feature-routes', { app: '${from.app}' }],
              ],
            },
            {
              from: ['pattern'],
              allow: [
                ['lib-api'],
                ['env', { app: '${from.app}' }],
                ['core', { app: '${from.app}' }],
                ['ui', { app: '${from.app}' }],
                ['pattern', { app: '${from.app}' }],
              ],
            },
            {
              from: ['feature'],
              allow: [
                ['lib-api'],
                ['env', { app: '${from.app}' }],
                ['core', { app: '${from.app}' }],
                ['ui', { app: '${from.app}' }],
                ['pattern', { app: '${from.app}' }],
                ['feature', { app: '${from.app}', feature: '${from.feature}' }],
              ],
            },
            {
              from: ['feature-routes'],
              allow: [
                ['lib-api'],
                ['env', { app: '${from.app}' }],
                ['core', { app: '${from.app}' }],
                ['pattern', { app: '${from.app}' }],
                ['feature', { app: '${from.app}', feature: '${from.feature}' }],
                [
                  'feature-routes',
                  { app: '${from.app}', feature: '!${from.feature}' },
                ],
              ],
            },
            {
              from: ['lib-api'],
              allow: [['lib', { app: '${from.lib}' }]],
            },
            {
              from: ['lib'],
              allow: [['lib', { app: '${from.lib}' }]],
            },
          ],
        },
      ],
      '@typescript-eslint/consistent-type-assertions': [
        'error',
        {
          assertionStyle: 'as',
        },
      ],
      '@angular-eslint/directive-selector': [
        'error',
        {
          type: 'attribute',
          prefix: 'app',
          style: 'camelCase',
        },
      ],
      '@angular-eslint/component-selector': [
        'error',
        {
          type: 'element',
          prefix: 'app',
          style: 'kebab-case',
        },
      ],
      'boundaries/no-unknown-files': 'error',
    },
    settings: {
      'import/resolver': {
        typescript: {
          alwaysTryTypes: true,
        },
      },
      'boundaries/ignore': [],
      'boundaries/dependency-nodes': ['import', 'dynamic-import'],
      'boundaries/elements': [
        {
          type: 'env',
          pattern: '^src/environments/.*\\.ts$',
          basePattern: 'projects/*',
        },
        {
          type: 'main',
          mode: 'file',
          pattern: 'main.ts',
          basePattern: 'projects/event-me/src',
          baseCapture: ['app'],
        },
        {
          type: 'app',
          mode: 'file',
          pattern: 'app(-|.)*.ts',
          basePattern: 'projects/event-me/src/app',
          baseCapture: ['app'],
        },
        {
          type: 'core',
          pattern: 'core',
          basePattern: 'projects/event-me/src/app',
          baseCapture: ['app'],
        },
        {
          type: 'ui',
          pattern: 'ui',
          basePattern: 'projects/event-me/src/app',
          baseCapture: ['app'],
        },
        {
          type: 'layout',
          pattern: 'layout',
          basePattern: 'projects/event-me/src/app',
          baseCapture: ['app'],
        },
        {
          type: 'pattern',
          pattern: 'pattern',
          basePattern: 'projects/event-me/src/app',
          baseCapture: ['app'],
        },
        {
          type: 'feature-routes',
          mode: 'file',
          pattern: 'feature/*/*.routes.ts',
          capture: ['feature'],
          basePattern: 'projects/event-me/src/app',
          baseCapture: ['app'],
        },
        {
          type: 'feature',
          pattern: 'feature/*',
          capture: ['feature'],
          basePattern: 'projects/event-me/src/app',
          baseCapture: ['app'],
        },

        {
          type: 'lib-api',
          mode: 'file',
          pattern: 'projects/event-me/src/public-api.ts',
          capture: ['lib'],
        },
        {
          type: 'lib',
          pattern: 'projects/event-me/src/lib',
          capture: ['lib'],
        },
      ],
    },
  },
  {
    files: ['**/*.html'],
    extends: [
      ...angular.configs.templateRecommended,
      ...angular.configs.templateAccessibility,
    ],
    rules: {},
  }
);
