<script>
import Section1 from '$lib/components/homepage/Section1.svelte'

export /** @type {boolean} */ const homepage = true;

</script>
  
<svelte:head>
	<title>Home</title>
	<meta name="description" content="Ecosystem DAO" />
</svelte:head>

<div>
	<Section1 {homepage}/>
</div>
