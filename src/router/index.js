import { createWebHistory, createRouter } from 'vue-router';
import ContactBook from '@/views/ContactBook.vue';
const routes = [
    {
        path: '/',
        name: 'contactbook',
        component: ContactBook,
    },
    {
        path: '/:pathMatch(.*)*',
        name: 'notfound',
        component: () => import('@/views/NotFound.vue'),
    },
];
const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL), // giúp component nhìn đẹp
    routes,
});
export default router;
