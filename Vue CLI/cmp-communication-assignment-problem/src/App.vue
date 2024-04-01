<template>
	<h1>App Vue</h1>
	<div class="action-box">
		<user-data @user-data="setUserData"></user-data>
		<active-users :userData="userData"></active-users>
	</div>
</template>

<script>
	import ActiveUsers from "./components/ActiveUsers.vue";
	export default {
		components: { ActiveUsers },
		data() {
			return {
				userData: {
					userName: "",
					age: 0,
				},
			};
		},
		methods: {
			setUserData(user) {
				this.userData.userName = user.userName;
				this.userData.age = user.age;
			},
		},
	};
</script>

<style scoped>
	.action-box {
		display: flex;
		justify-content: space-between;
		width: 100vw;
		border: 1px solid #ccc;
	}
</style>
