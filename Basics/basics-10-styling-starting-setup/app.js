const { createApp } = Vue;

const app = createApp({
	data() {
		return {
			boxASelected: false,
			boxBSelected: false,
			boxCSelected: false,
		};
	},
	computed: {
		boxAClasses() {
			return { active: this.boxASelected }; // For more complex classes we can create a separate computed method for the bind classes
		},
	},
	methods: {
		updateBoxColor(box) {
			if (box === "A") {
				this.boxASelected = !this.boxASelected;
			} else if (box === "B") {
				this.boxBSelected = !this.boxBSelected;
			} else if (box === "C") {
				this.boxCSelected = !this.boxCSelected;
			}
		},
	},
});

app.mount("#styling");
