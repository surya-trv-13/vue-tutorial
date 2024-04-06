<template>
	<div>
		<!-- Slot will add all the child of the component to inside the template. -->
		<!-- The $slots check the headSlot is undefined or not if if is undefined then it will not render -->
		<header v-if="$slots.headSlot">
			<!-- Below one is a named slot which we used to differentiate among other slots -->
			<slot name="headSlot">
				<!-- Anything written inside the slot is an default for if nothing is mentioned in the slot call from parent component -->
				<!-- <h2>The Default</h2> -->
			</slot>
		</header>
		<slot></slot>
	</div>
</template>

<script>
export default {};
</script>

<style scoped>
header {
	display: flex;
	justify-content: space-between;
	align-items: center;
}
div {
	margin: 2rem auto;
	max-width: 30rem;
	border-radius: 12px;
	box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
	padding: 1rem;
}
</style>
