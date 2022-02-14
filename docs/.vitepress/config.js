const pkg = require('../../package.json')

module.exports = {
  title: 'rhodash',
  description: pkg.description,
  themeConfig: {
    repo: 'KoichiKiyokawa/rhodash',
    docsDir: 'docs',
    docsBranch: 'main',

    editLinks: true,
    editLinkText: 'Edit this page on GitHub',
  },
}
