export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
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
                  buildHookId: '5e7b12d21f48864df22f0336',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-gxjoq8xs',
                  apiId: '517436e8-b603-4c6a-9cfc-57e6dee126c4'
                },
                {
                  buildHookId: '5e7b12d2c0fd564b53f169d6',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-jejs34gh',
                  apiId: '7d850430-087f-44f7-afe6-39c4450b5767'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/karamata/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-jejs34gh.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
