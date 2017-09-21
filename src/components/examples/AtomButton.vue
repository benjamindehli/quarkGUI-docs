<template>
	<div v-show="isSelected">
		<div class="generator">
			<h2>Button</h2>
			<div class="row">
				<div class="config col-sm-4">
					<h3>Properties</h3>
					<div><label>ID<input v-model="elementProperties.id" /></label></div>
					<div><label>Link<input v-model="elementProperties.link" /></label></div>
					<div><label>Icon class<input v-model="elementProperties.iconClass" /></label></div>
					<div><label>Content<input v-model="elementProperties.content" /></label></div>
					<div><label>Submit<input type="checkbox" v-model="elementProperties.submit" /></label></div>

					<div>
						<label>Type
							<select v-model="elementProperties.type">
								<option v-for="type in config.type" v-bind:value="type">{{ type }}</option>
							</select>
						</label>
					</div>
					<div>
						<label>Theme
							<select v-model="elementProperties.theme">
								<option v-for="theme in config.theme" v-bind:value="theme">{{ theme }}</option>
							</select>
						</label>
					</div>
				</div>

				<div class="result col-sm-8">
					<results></results>
				</div>
			</div>
		</div>
	</div>
</template>


<script>
import * as quark from "quark-gui";
import Results from './partials/Results.vue';

let Button = quark.Atoms.Buttons.Button;

export default {
	name: 'AtomButton',
	components: {
		Results: Results
	},
	data: function () {
		return {
			moduleName: 'Button',
			moduleNameSpace: 'Atoms.Buttons',
			elementProperties: {
				id: '',
				link: '',
				iconClass: '',
				content: 'button',
				title: '',
				type: 'flat',
				theme: 'default',
				submit: false
			},
			config: {
				theme: ['default', 'primary', 'info', 'success', 'warning', 'danger'],
				type: ['flat', 'raised', 'minimal']
			},
			resultOptions:{
				show: 'preview'
			}
		}
	},
	computed: {
		isSelected: function (){
			let selected = this.$parent.selectedModule;
			return selected.moduleName == this.moduleName && selected.moduleNameSpace == this.moduleNameSpace;
		},
		previewElement: function (){
			return Button.getModule(this.elementProperties)
		}
	}
}
</script>
