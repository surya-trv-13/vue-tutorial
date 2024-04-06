<template>
	<form @submit.prevent="setActiveUser">
		<div>
			<label for="userName">UserName</label>
			<input type="text" name="userName" v-model="userData.userName" />
		</div>
		<div>
			<label for="age">Age</label>
			<input type="text" name="age" v-model="userData.age" />
		</div>
		<button>Submit</button>
	</form>
</template>

<script>
	export default {
		emits: [ 'user-data' ],
		data() {
			return {
				userData: {
					userName: "",
					age: 0,
				},
			};
		},
		methods: {
			setActiveUser() {
				this.$emit("user-data", this.userData);
			},
		},
	};
</script>

<style scoped>
	form {
		border: 1px double #6c757d;
		text-align: center;
		width: 40vw;
		padding: 0.3 rem;
	}
	form > div {
		margin: 1rem;
		display: block;
	}

	form > button {
		margin: 0.4rem;
	}

	form > div > input {
		padding: 0.15 rem;
	}

	form > div > label {
		margin-right: 1 rem;
		width: 7rem;
		display: inline-block;
	}
</style>
