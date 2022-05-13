export default [
    // {
    //     path: '/articles/create',
    //     name: 'articles-create',
    //     component: () =>
    //         import ('@/views/articles/Create.vue'),
    // },
    {
        path: '/articles/catalogue',
        name: 'articles-catalogue',
        component: () =>
            import ('@/views/articles/Catalogue.vue'),
    },
]