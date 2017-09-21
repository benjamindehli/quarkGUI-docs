<template>
	<div>
		<h3>Result</h3>
		<div class="tabs">
			<span class='tab tab-preview' v-bind:class="{active: $parent.resultOptions.show == 'preview'}" v-on:click="$parent.resultOptions.show = 'preview'">Preview</span>
			<span class='tab tab-markup' v-bind:class="{active: $parent.resultOptions.show == 'markup'}" v-on:click="$parent.resultOptions.show = 'markup'">Markup</span>
		</div>
		<div v-show="$parent.resultOptions.show == 'preview'" class="preview">
			<div v-html="$parent.previewElement"></div>
		</div>
		<div v-show="$parent.resultOptions.show == 'markup'" class="markup">
			<span>import * as quark from 'quark-gui';</span>
			<span>let {{$parent.moduleName}} = quark.{{$parent.moduleNameSpace}}.{{$parent.moduleName}};</span>
			<span>{{$parent.moduleName}}.getModule(</span>
			<pre v-html="$parent.elementProperties"></pre>
			<span>);</span>
		</div>
	</div>
</template>

<script>
export default {
	name: 'Results'
}
</script>
