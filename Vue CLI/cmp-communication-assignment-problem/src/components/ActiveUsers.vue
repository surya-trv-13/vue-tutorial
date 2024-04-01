<template>
	<div class="activeUser">
		<p>User Data</p>
		<h2>{{ userData.userName }}</h2>
		<h3>{{ userData.age }}</h3>
	</div>
</template>

<script>
	export default {
		props: {
			userData: Object,
		},
		data() {
			return {
				username: "",
				age: 0,
			};
		},
	};
</script>

<style scoped>
	.activeUser {
		width: 40vw;
		height: auto;
	}
</style>
