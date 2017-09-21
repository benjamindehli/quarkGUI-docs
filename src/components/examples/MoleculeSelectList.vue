<template>
	<div v-show="isSelected">
		<div class="generator">
			<h2>Select list</h2>
			<div class="row">
				<div class="config col-sm-4">
					<h3>Properties</h3>
					<div><label>ID<input v-model="elementProperties.id" /></label></div>
					<div><label>Name<input v-model="elementProperties.name" /></label></div>
					<div><label>Searchable<input type="checkbox" v-model="elementProperties.searchable" /></label></div>
					<div>
						<label>Type
							<select v-model="elementProperties.type">
								<option v-for="type in config.type" v-bind:value="type">{{ type }}</option>
							</select>
						</label>
					</div>

					<div><label>Value<input v-model="elementProperties.value" /></label></div>
					<div><label>Label<input v-model="elementProperties.label" /></label></div>
					<div><label>Placeholder<input v-model="elementProperties.placeholder" /></label></div>					

					<p>Options <span class="button" v-on:click="addOption()">add option</span></p>
					<div v-show="elementProperties.options.length" class="form-list">
						<div v-for="option in elementProperties.options" class="form-list-item">
							<span class="form-list-item-remove" v-on:click="removeOption(option)"></span>
							<div><label>Name<input v-model="option.name" /></label></div>
							<div><label>Value<input v-model="option.value" /></label></div>
						</div>
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

let SelectList = quark.Molecules.FormElements.SelectList;

export default {
	name: 'MoleculeSelectList',
	components: {
		Results: Results
	},
	data: function () {
		return {
			moduleName: 'SelectList',
			moduleNameSpace: 'Molecules.FormElements',
			elementProperties: {
				id: '',
				name: '',
				searchable: true,
				type: 'text',
				value: '',
				label: 'Label',
				placeholder: 'Placeholder',
				options: [{name: 'option 1', value: '1'}]
			},
			config: {
				type: ['text', 'number']
			},
			resultOptions:{
				show: 'preview'
			}

		}
	},
	methods:{
		addOption: function(){
			this.elementProperties.options.push({
				name: '',
				value: ''
			});
		},
		removeOption: function(option){
			let index = this.elementProperties.options.indexOf(option)
			this.elementProperties.options.splice(index, 1);
		}
	},
	computed: {
		isSelected: function (){
			let selected = this.$parent.selectedModule;
			return selected.moduleName == this.moduleName && selected.moduleNameSpace == this.moduleNameSpace;
		},
		previewElement: function (){

			return quark.Molecules.FormElements.SelectList.getModule(this.elementProperties)
		}
	}
}
</script>
