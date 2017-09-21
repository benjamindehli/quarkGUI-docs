<script>
/* Template */
import ExamplesTemplate from "./ExamplesTemplate.quark";

/* Components*/
import AtomButton from './examples/AtomButton.vue';
import MoleculeSelectList from './examples/MoleculeSelectList.vue';
import Modules from './sections/Modules.vue'


export default {
	name: 'Examples',
	template: ExamplesTemplate,
	data: function() {
		return {
			modules: require("../json/modules.json"),
			selectedModule: {}
		}
	},
	components: {
		AtomButton: AtomButton,
		MoleculeSelectList: MoleculeSelectList,
		Modules: Modules
	}
}
</script>
