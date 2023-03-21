<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
	<nav>
		<a href="https://nextcode-in.netlify.app/"><img src="./components/img/logo.jpg" alt="logo" /></a>
		<div class="menu">
			<RouterLink to="/"><i class="fa-brands fa-react"></i> react</RouterLink>
			<RouterLink to="/angular"
				><i class="fa-brands fa-angular"></i> angular</RouterLink
			>
			<RouterLink to="/vue"><i class="fa-brands fa-vuejs"></i> vue</RouterLink>
			<RouterLink to="/html"
				><i class="fa-brands fa-html5"></i> html</RouterLink
			>
			<RouterLink to="/css"
				><i class="fa-brands fa-css3-alt"></i>css</RouterLink
			>
			<RouterLink to="/javascript"
				><i class="fa-brands fa-js"></i> javascript</RouterLink
			>
		</div>
	</nav>

	<RouterView />
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
nav img {
	width: 60px;
}
.menu {
	display: flex;
}
.menu a {
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
.menu a:hover {
	background-color: #132239;
	color: #f8e893;
	border-bottom: 3px solid #f8e893;
}
.menu a:focus {
	background-color: #132239;
	color: #f8e893;
	border-bottom: 3px solid #f8e893;
}
.menu a:nth-child(1) {
	border-bottom-left-radius: 5px;
	border-top-left-radius: 5px;
}
.menu a:nth-child(6) {
	border-bottom-right-radius: 5px;
	border-top-right-radius: 5px;
}
</style>
