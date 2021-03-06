Package.describe({
  name: 'faisalman:ua-parser-js',
  version: '0.7.9',
  summary: 'Lightweight JavaScript-based user-agent string parser',
  git: 'https://github.com/faisalman/ua-parser-js.git',
  documentation: 'readme.md'
});

Package.on_use(function (api) {
  api.export("UAParser");
  api.addFiles("src/ua-parser.js");
});
