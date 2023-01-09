<script lang="ts">
import { page } from '$app/stores';
import WalletConnectButton from './WalletConnectButton.svelte'

//let transparent = 'bg-warning';
//if ($page.url.pathname === '/') {
//	transparent = 'transparent';
//}
export let homepage:boolean;

</script>
<!--
<div class="px-0">
	<div class="bg-danger py-2 text-light py-0 text-center under-construction">
		<Tools /> Under construction - <a class="text-light" href="https://discord.com/channels/621759717756370964/971037457661444156" target="_blank">contributions welcome via discord!</a>
	</div>
</div>
-->
<nav class="navbar navbar-expand-md transparent">
	<div class="container-fluid mx-5">
	  	<a class="navbar-brand" href="/">
			<img class="nav-logo" src="/img/logo-white.jpeg" alt="CityCoins Test" />
		</a>
		<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
			<span class="navbar-toggler-icon"></span>
		</button>
		<div class="collapse navbar-collapse" id="navbarNav">
			<ul class="navbar-nav">
				<li class="nav-item"><a href="/events/create">Test Cases</a></li>
				<li class="nav-item mb-1">
					<WalletConnectButton />
				</li>
			</ul>
		</div>
	</div>
</nav>

<style>
</style>
