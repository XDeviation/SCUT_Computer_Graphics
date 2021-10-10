const routers = [
    {
        path: '/index',
        name: 'index',
        component: () => import('./components/index.vue'),
    },
    {
        path: '/',
        component: () => import('./components/index.vue'),
    },
    {
        path: '/day1_problems',
        name: 'day1_problems',
        component: () => import('./components/day1_problems.vue'),
    },
    {
        path: '/green_triangle',
        name: 'green_triangle',
        component: () => import('./components/green_triangle.vue'),
    },
    {
        path: '/triangle_ball',
        name: 'triangle_ball',
        component: () => import('./components/triangle_ball.vue'),
    },
    {
        path: '/sierpinski_gasket',
        name: 'sierpinski_gasket',
        component: () => import('./components/3d_sierpinski_gasket.vue'),
    },
    {
        path: '/convex_polygon',
        name: 'convex_polygon',
        component: () => import('./components/convex_polygon.vue'),
    },
    {
        path: '/day3_problems',
        name: 'day3_problems',
        component: () => import('./components/day3_problems.vue'),
    },
    {
        path: '/exp1',
        name: 'exp1',
        component: () => import('./components/exp1.vue'),
    }
]

export default routers
