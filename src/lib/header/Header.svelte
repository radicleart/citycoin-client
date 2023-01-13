<script lang="ts">
import { page } from '$app/stores';
import WalletConnectButton from './WalletConnectButton.svelte'

</script>
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
