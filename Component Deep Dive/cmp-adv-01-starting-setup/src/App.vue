<template>
	<div>
		<the-header></the-header>
		<BadgeList />
		<user-info
			:full-name="activeUser.name"
			:info-text="activeUser.description"
			:role="activeUser.role"
		></user-info>
	</div>
</template>

<script>
	// Local Component it can be used in the same file, it will not allow in the child component as well.
	import TheHeader from "./components/TheHeader.vue";
	import BadgeList from "./components/BadgeList.vue";
	import UserInfo from "./components/UserInfo.vue";
	export default {
		components: { TheHeader, BadgeList, UserInfo },
		data() {
			return {
				activeUser: {
					name: "Maximilian Schwarzmüller",
					description: "Site owner and admin",
					role: "admin",
				},
			};
		},
	};
</script>

<style>
	html {
		font-family: sans-serif;
	}

	body {
		margin: 0;
	}
</style>
