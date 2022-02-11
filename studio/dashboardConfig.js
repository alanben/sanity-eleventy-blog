export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-eleventy-blog'
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
                  buildHookId: '620606704e0af553199af9d5',
                  title: 'Sanity Studio',
                  name: 'sanity-eleventy-blog-studio-ndzo8t36',
                  apiId: '4901bfd8-b692-4c91-9fd2-b50e91541c30'
                },
                {
                  buildHookId: '6206067033111d4d7018dee6',
                  title: 'Blog Website',
                  name: 'sanity-eleventy-blog-web-cj6o3mzj',
                  apiId: '4186f94f-1649-4f9c-a470-3209ded6daf7'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/alanben/sanity-eleventy-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-eleventy-blog-web-cj6o3mzj.netlify.app', category: 'apps'}
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
