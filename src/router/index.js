import { createRouter, createWebHistory } from 'vue-router'
import Details from '@/views/article/details'
import List from '@/views/article/list'
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
                path: 'details',
                name: 'Details',
                component: Details
            },
            {
                path: 'list',
                name: 'List',
                component: List
            }
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