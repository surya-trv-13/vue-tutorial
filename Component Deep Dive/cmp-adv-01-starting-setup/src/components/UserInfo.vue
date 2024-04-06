<template>
	<section>
		<base-card>
			<!-- We define which slot this part for the component should go to we mention it with v-slot: -->
			<!-- v-slot can be use by an shorthand operator # -->
			<!--<template v-slot:headSlot></template> : Reference-->
			<template #headSlot>
				<h3>{{ fullName }}</h3>
				<base-badge :type="role" :caption="role.toUpperCase()"></base-badge>
			</template>
			<!-- This v-slot:default will add the template to the default slot in the base component -->
			<template #default>
				<p>{{ infoText }}</p>
			</template>
		</base-card>
	</section>
</template>

<script>
export default {
	props: ["fullName", "infoText", "role"],
};
</script>
