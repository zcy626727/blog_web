import { createRouter, createWebHistory } from 'vue-router'
import Layout from "@/layout/body";

const routes = [{
        path: '/',
        name: 'Test',
        component: () =>
            import ('@/views/test.vue')
    },
    {
        path: '/articles',
        name: 'Articles',
        redirect: '/articles/list',
        component: Layout,
        children: [{
                path: 'list',
                name: 'List',
                component: () =>
                    import ('@/views/article/list')
            },
            {
                path: 'details/:id',
                name: 'Details',
                component: () =>
                    import ('@/views/article/details')
            },
        ]
    },

    // 
    //     path: '/blog',
    //     name: 'Blog',
    //     component: () =>
    //         import ('../views/test.vue'),
    //     redirect: '/blog/list',
    //     children: [{
    //         path: 'list',
    //         name: 'list',
    //         component: () =>
    //             import ('@/views/blog/list'),
    //         meta: { title: '文章列表' }
    //     }]
    // }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router