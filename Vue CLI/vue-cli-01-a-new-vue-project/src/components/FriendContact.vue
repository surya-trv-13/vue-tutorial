<template>
	<li>
		<h2>{{ name }} {{ this.isFavorite ? "(Favorite)" : "" }}</h2>
		<button @click="toggleDetails">{{ this.detailsAreVisible ? "Hide" : "Show" }} Details</button>
		<button @click="toggleFavorite">Toggle Favorite</button>
		<button @click="deleteFriend">Delete Friend</button>
		<ul v-if="detailsAreVisible">
			<li>{{ phoneNumber }}</li>
			<li>{{ emailAddress }}</li>
		</ul>
	</li>
</template>

<script>
	export default {
		// props: ["name", "phoneNumber", "emailAddress"], // The props declared should be in the camel case however in whild sending data we can use the Cap-up case

		/**
		 *      Specifically, the following value types (type property) are supported:
		 *       String
		 *       Number
		 *       Boolean
		 *       Array
		 *       Object
		 *       Date
		 *       Function
		 *       Symbol
		 *       But type can also be any constructor function (built-in ones like Date or custom ones).
		 */
		props: {
			id: {
				type: String,
				required: true,
			},
			name: {
				type: String,
				required: true,
			},
			emailAddress: {
				type: String,
				required: true,
			},
			phoneNumber: {
				type: String,
				required: true,
			},
			isFavorite: {
				type: Boolean,
				required: false,
				default: false,
				// validator: (value) => value === "0" || value === "1", // We can allow validator for the props validation
			},
		},
		// This is a kinda documentation for the which custom event this component will emit.
		emits: ["toggle-favorite", "delete-friend"],
		/**
		 * props are unidirectional and immutable, hence if you want to mutate the props data
		 *  1) store it in the data property ans changes or
		 *  2) tell the parent component to change the value for the props in the parent and send the updated prop.
		 */
		data() {
			return {
				detailsAreVisible: false,
			};
		},
		methods: {
			toggleDetails() {
				this.detailsAreVisible = !this.detailsAreVisible;
			},
			toggleFavorite() {
				// this.favoriteFriend = !this.favoriteFriend;

				// This emit is a Vue internal method which takes  prop and emit the events to send the data back from child to parent
				this.$emit("toggle-favorite", this.id);
			},
			deleteFriend() {
				this.$emit("delete-friend", this.id);
			},
		},
	};
</script>
c
