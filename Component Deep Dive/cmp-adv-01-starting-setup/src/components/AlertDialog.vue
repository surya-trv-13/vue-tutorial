<template>
	<dialog open>
		<slot>s</slot>
	</dialog>
</template>
<style>
dialog {
	position: fixed;
	margin: 0;
	border-radius: 0;
	background: #fff;
	box-shadow: 2px 2px 2px rgb(0, 0, 0, 0.26);
	left: 30%;
	top: 20vh;
	width: 40%;
}
</style>
