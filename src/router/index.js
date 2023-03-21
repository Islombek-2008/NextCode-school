import { createRouter, createWebHistory } from "vue-router";
import angular from "../views/angular.vue";
import html from "../views/html.vue";
import css from "../views/css.vue";
import react from "../views/react.vue";
import javascript from "../views/javascript.vue";
import vue from "../views/vue.vue";

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: "/",
			name: "react",
			component: react,
		},
		{
			path: "/html",
			name: "html",
			component: html,
		},
		{
			path: "/angular",
			name: "angular",
			component: angular,
		},
		{
			path: "/css",
			name: "css",
			component: css,
		},
		{
			path: "/javascript",
			name: "javascript",
			component: javascript,
		},
		{
			path: "/vue",
			name: "vue",
			component: vue,
		},
	],
});

export default router;
