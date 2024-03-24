<template>
	<li>
		<h2>{{ friend.name }}</h2>
		<button @click="toggleDetails">Show Details</button>
		<ul v-if="detailsAreVisible">
			<li>{{ friend.phone }}</li>
			<li>{{ friend.email }}</li>
		</ul>
	</li>
</template>

<script>
	export default {
		data() {
			return {
				detailsAreVisible: false,
				friend: {
					id: "surya",
					name: "Suryanarayan Rath",
					phone: "0123 889889889",
					email: "surya@gmail.com",
				},
			};
		},
		methods: {
			toggleDetails() {
				this.detailsAreVisible = !this.detailsAreVisible;
			},
		},
	};
</script>
