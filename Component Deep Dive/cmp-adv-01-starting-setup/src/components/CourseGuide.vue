<template>
	<ul>
		<li v-for="guide in guides" :key="guide">
			<!-- scoped slot -->
			<slot :goal="guide" another-prop="..."></slot>
		</li>
	</ul>
</template>

<script>
export default {
	data() {
		return {
			guides: ["Finish the Course", "Learn Vue"],
		};
	},
};
</script>
