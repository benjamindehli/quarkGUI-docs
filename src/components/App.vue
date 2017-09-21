<template>
	<div id="app">
		<main-navigation></main-navigation>
		<main id="mainContent">
			<div class="introduction-container">
				<h1>quarkGUI</h1>
				<p>A Webpack GUI framework based on atomic design</p>
			</div>
			<div class="main-content">
				<h1>
					quarkGUI Generator
				</h1>
				<div class="row">
					
				</div>

				<examples></examples>

				
			</div>
			<main-footer></main-footer> 
		</main>
	</div>
</template>

<script>
import * as quark from 'quark-gui';
import MainNavigation from './MainNavigation.vue';
import MainFooter from './MainFooter.vue';
import Examples from './Examples.vue';

export default {
	name: 'app',
	components: {
		mainNavigation: MainNavigation,
		mainFooter: MainFooter,
		Examples: Examples
	}
}
</script>
