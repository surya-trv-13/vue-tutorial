<template>
	<div>
		<the-header></the-header>
		<!-- <BadgeList />
		<user-info
			:full-name="activeUser.name"
			:info-text="activeUser.description"
			:role="activeUser.role"
		></user-info>
		<course-guide #default="slotProps">
			<h2>{{ slotProps.goal }}</h2>
			<p>{{ slotProps.anotherProp }}</p>
		</course-guide> -->
		<hr />
		<h2>Dynamic Component</h2>
		<button @click="setSelectedComponent('active-course')">Active Course</button>
		<button @click="setSelectedComponent('manage-course')">Manage Courses</button>
		<!-- Keep Alive does not destroy/ remove component from the DOM rather keep the component cached  -->
		<!-- Hence when we visit the component again we get where we left off -->
		<keep-alive>
			<component :is="selectedComponent"></component>
		</keep-alive>
	</div>
</template>

<script>
// Local Component it can be used in the same file, it will not allow in the child component as well.
import TheHeader from "./components/TheHeader.vue";
import BadgeList from "./components/BadgeList.vue";
import UserInfo from "./components/UserInfo.vue";
import CourseGuide from "./components/CourseGuide.vue";
import ActiveCourse from "./components/ActiveCourse.vue";
import ManageCourse from "./components/ManageCourse.vue";

export default {
	components: { TheHeader, BadgeList, UserInfo, CourseGuide, ActiveCourse, ManageCourse },
	data() {
		return {
			selectedComponent: "active-course",
			activeUser: {
				name: "Maximilian Schwarzmüller",
				description: "Site owner and admin",
				role: "admin",
			},
		};
	},
	methods: {
		setSelectedComponent(cmp) {
			this.selectedComponent = cmp;
		},
	},
};
</script>

<style>
html {
	font-family: sans-serif;
}

body {
	margin: 0;
}
</style>
