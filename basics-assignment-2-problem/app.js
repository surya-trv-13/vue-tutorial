const { createApp } = Vue;

const app = createApp({
	data() {
		return {
			anyValue: "Surya",
			textField1: "",
			textField2: "",
			confirmedText: "",
		};
	},
	methods: {
		showAlert() {
			alert(this.anyValue);
		},
		setTextValue(event) {
			this.textField1 = event.target.value;
		},
		setTextValue2(event) {
			this.textField2 = event.target.value;
		},
		confirmValue() {
			this.confirmedText = this.textField2;
		},
	},
});

app.mount("#assignment");
