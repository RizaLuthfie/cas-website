import { createRouter, createWebHistory } from "vue-router";
import HomePage from "@/components/HomePage.vue";
import ServicesPage from "@/components/ServicesPage.vue";
import ServiceDetailPage from "@/components/ServiceDetailPage.vue";
import AboutPage from "@/components/AboutPage.vue";
import ContactPage from "@/components/ContactPage.vue";
import BookingPage from "@/components/BookingPage.vue";

const routes = [
    {
        path: "/",
        name: "Home",
        component: HomePage,
    },
    {
        path: "/services",
        name: "Services",
        component: ServicesPage,
    },
    {
        path: "/services/:slug",
        name: "ServiceDetail",
        component: ServiceDetailPage,
    },
    {
        path: "/about",
        name: "About",
        component: AboutPage,
    },
    {
        path: "/contact",
        name: "Contact",
        component: ContactPage,
    },
    {
        path: "/booking",
        name: "Booking",
        component: BookingPage,
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition
        } else {
            return { top: 0 }
        }
    }
})

export default router