const { createApp } = Vue;

const app = createApp({
	data() {
		return {
			detailsVisible: false,
			friends: [
				{
					id: "surya",
					name: "Suryanarayan Rath",
					phone: "8897583610",
					email: "rathsurya13@gmail.com",
				},
				{
					id: "ipsita",
					name: "Ipsita Sahoo",
					phone: "8888988888",
					email: "ipsitasahoo@gmail.com",
				},
			],
		};
	},
});

// Component can be created
app.component("friend-component", {
	template: `
        <li>
        <h2>{{friend.name}}</h2>
        <button @click="toggleDetails">
            {{detailsVisible ? 'Hide': 'Show'}} Details
        </button>
        <ul v-if="detailsVisible">
            <li><strong>Phone:</strong> {{friend.phone}}</li>
            <li><strong>Email:</strong> {{friend.email}}</li>
        </ul>
    </li>`, // Adding the template for the component
	data() {
		return {
			detailsVisible: false, // The data are only available for the 
			friend: {
				id: "surya",
				name: "Suryanarayan Rath",
				phone: "8897583610",
				email: "rathsurya13@gmail.com",
			},
		};
	},
	methods: {
		toggleDetails() {
			this.detailsVisible = !this.detailsVisible;
		},
	},
});

app.mount("#app");
