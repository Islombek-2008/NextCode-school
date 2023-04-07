<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
	<nav class="navbar navbar-expand-md navbar-light">
		<a href="https://nextcode-in.netlify.app/" class="navbar-brand"
			><img src="./components/img/logo.jpg" alt="logo"
		/></a>
		<button
			class="navbar-toggler"
			type="button"
			data-toggle="collapse"
			data-target="#navbarNav"
			aria-controls="navbarNav"
			aria-expanded="false"
			aria-label="Toggle navigation"
		>
			<span class="navbar-toggler-icon"></span>
		</button>
		<div class="collapse navbar-collapse" id="navbarNav">
			<div class="menu navbar-nav ml-auto">
				<RouterLink class="router-link" to="/"
					><i class="fa-brands fa-react"></i> react</RouterLink
				>
				<RouterLink class="router-link" to="/angular"
					><i class="fa-brands fa-angular"></i> angular</RouterLink
				>
				<RouterLink class="router-link" to="/vue"
					><i class="fa-brands fa-vuejs"></i> vue</RouterLink
				>
				<RouterLink class="router-link" to="/html"
					><i class="fa-brands fa-html5"></i> html</RouterLink
				>
				<RouterLink class="router-link" to="/css"
					><i class="fa-brands fa-css3-alt"></i>css</RouterLink
				>
				<RouterLink class="router-link" to="/javascript"
					><i class="fa-brands fa-js"></i> javascript</RouterLink
				>
			</div>
		</div>
	</nav>

	<router-view v-slot="{ Component }">
		<transition name="router" mode="out-in" appear>
			<component :is="Component"></component>
		</transition>
	</router-view>
</template>
<style scoped>
nav {
	position: fixed;
	display: flex;
	padding: 0 50px;
	justify-content: space-between;
	height: 70px;
	align-items: center;
	box-shadow: 0 0 10px #fff;
	right: 6px;
	top: 6px;
	left: 6px;
	border-radius: 5px;
	background-color: #fff;
}
.router-enter-from {
	opacity: 0;
	transform: translateY(100px);
}
.router-enter-active,
.router-leave-active {
	transition: all 0.2s ease-out;
}
.router-leave-to {
	opacity: 0;
	transform: translateY(100px);
}
nav img {
	width: 60px;
}
.menu {
	display: flex;
}
.menu .router-link {
	color: #fff;
	text-decoration: none;
	padding: 15px 15px;
	background-color: #1e3459;
	display: flex;
	align-items: center;
	gap: 5px;
	font-size: 20px;
	border-bottom: 3px solid transparent;
}
.menu .router-link:hover {
	background-color: #132239;
	color: #f8e893;
	border-bottom: 3px solid #f8e893;
}
.menu .router-link:focus {
	background-color: #132239;
	color: #f8e893;
	border-bottom: 3px solid #f8e893;
}
.menu .router-link:nth-child(1) {
	border-bottom-left-radius: 5px;
	border-top-left-radius: 5px;
}
.menu .router-link:nth-child(6) {
	border-bottom-right-radius: 5px;
	border-top-right-radius: 5px;
}
@media (max-width: 767px) {
	.menu .router-link:nth-child(1) {
		border-top-right-radius: 5px;
		border-top-left-radius: 5px;
		border-bottom-left-radius: 0px;
	}
	.menu .router-link:nth-child(6) {
		border-bottom-right-radius: 5px;
		border-bottom-left-radius: 5px;
		border-top-right-radius: 0px;
	}
}
</style>
<script>
export default {
	name: "Navbar",
	mounted() {
		// Close the navigation menu when a link or toggle button is clicked
		this.$nextTick(() => {
			$(".navbar-nav>li>a").on("click", function () {
				$(".navbar-collapse").collapse("hide");
			});
			$(".navbar-toggler").on("click", function () {
				$(this).toggleClass("active");
			});
		});
	},
};
</script>
