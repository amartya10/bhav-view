import { createWebHistory, createRouter } from "vue-router";

const routes = [
	{
		name:"home",
		path: "/",
		component: ()=> import("@/views/Equity"),
	},
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

export default router;
