import index from './components/index.vue'
import green_triangle from './components/green_triangle.vue'
import triangle_ball from './components/triangle_ball.vue'
import day1_problems from './components/day1_problems.vue'
import sierpinski_gasket from './components/3d_sierpinski_gasket.vue'
import convex_polygon from './components/convex_polygon.vue'
import day3_problems from './components/day3_problems.vue'

const routers = [
    {
        path: '/index',
        name: 'index',
        component: index,
    },
    {
        path: '/',
        component: index,
    },
    {
        path: '/day1_problems',
        name: 'day1_problems',
        component: day1_problems,
    },
    {
        path: '/green_triangle',
        name: 'green_triangle',
        component: green_triangle,
    },
    {
        path: '/triangle_ball',
        name: 'triangle_ball',
        component: triangle_ball,
    },
    {
        path: '/sierpinski_gasket',
        name: 'sierpinski_gasket',
        component: sierpinski_gasket,
    },
    {
        path: '/convex_polygon',
        name: 'convex_polygon',
        component: convex_polygon,
    },
    {
        path: '/day3_problems',
        name: 'day3_problems',
        component: day3_problems,
    },
]

export default routers
