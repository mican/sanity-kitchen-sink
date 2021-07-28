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
                  buildHookId: '61017bf8a5da712d37a6a89b',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-pbesec3d',
                  apiId: 'fa8f07cc-6d65-4982-9a00-e98a613a1ec3'
                },
                {
                  buildHookId: '61017bf9f455f32bc0f27685',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-1j8mo76m',
                  apiId: 'ade02ce0-e91b-402b-9487-76e96a0d5c83'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/mican/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-1j8mo76m.netlify.app', category: 'apps'}
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
