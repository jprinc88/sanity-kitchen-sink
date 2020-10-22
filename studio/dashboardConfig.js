export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5f917b7fe03be30ac7f5dc33',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-cb8w7ryd',
                  apiId: 'fc50d201-787d-40a1-9885-d96ebd64b3ce'
                },
                {
                  buildHookId: '5f917b7f617386e114f3e534',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-2jti3y8r',
                  apiId: '1564135d-6f5a-4361-afde-5652038ff016'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/jprinc88/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-2jti3y8r.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
