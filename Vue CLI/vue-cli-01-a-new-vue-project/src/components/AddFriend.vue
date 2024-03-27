<template>
	<form @submit.prevent="addFriend">
		<div>
			<label>Name</label>
			<input type="text" name="Name" v-model="friendData.name" />
		</div>
		<div>
			<label>Phone</label>
			<input type="tel" name="Phone" v-model="friendData.phone" />
		</div>
		<div>
			<label>Email</label>
			<input type="email" name="Email" v-model="friendData.email" />
		</div>
		<div>
			<button>Add Friend</button>
		</div>
	</form>
</template>

<script>
	export default {
		emits: ["add-friend"],
		data() {
			return {
				friendData: {
					name: "",
					phone: "",
					email: "",
				},
			};
		},
		methods: {
			addFriend() {
				this.$emit("add-friend", this.friendData);
			},
		},
	};
</script>
