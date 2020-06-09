// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Crow Hill Guitars',
  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: './src/pages/collection/**/*.md',
        typeName: 'CollectionItem',
        route: '/collection/:title',
        remark: {

        }
      }
    }
  ],
  templates: {
    CollectionItem: '/collection/:title'
  },
  transformers: {
    remark: {
      externalLinksTarget: '_blank',
      externalLinksRel: ['nofollow', 'noopener', 'noreferrer'],
      anchorClassName: 'icon icon-link',
      plugins: [
        'remark-images'
      ]
    }
  }
}
