<template>
	<h2>My Friends</h2>
	<ul>
		<friend-contact></friend-contact>
	</ul>
</template>

<script>
	import FriendContact from "./components/FriendContact.vue";
	export default {
		components: { FriendContact },
		data() {
			return {
				friend: [
					{
						id: "surya",
						name: "Suryanarayan Rath",
						phone: "0123 889889889",
						email: "surya@gmail.com",
					},
					{
						id: "julie",
						name: "Julie Rath",
						phone: "0123 99999889",
						email: "julie@gmail.com",
					},
				],
			};
		},
	};
</script>
