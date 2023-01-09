<script lang="ts">
import { stringUtf8CV } from 'micro-stacks/clarity';
import { PostConditionMode } from 'micro-stacks/transactions';
import { getOpenContractCall } from '@micro-stacks/svelte';

const contractCall = getOpenContractCall();

$: memo = 'new user';

const submit = async () => {
	const functionArgs = [stringUtf8CV('new user')]
	await $contractCall.openContractCall({
		postConditions: [],
		postConditionMode: PostConditionMode.Deny,
		contractAddress: import.meta.env.VITE_MIA_CORE.split('.')[0],
		contractName: import.meta.env.VITE_MIA_CORE.split('.')[1],
		functionName: 'register-user',
		functionArgs: functionArgs,
		onFinish: data => {
			console.log(data);
		},
		onCancel: () => {
			console.log('popup closed!');
		},
    });
}

const canRegister = true;
</script>

<section>
    <div class="container my-5">
		<div>
			<div class="d-flex justify-content-center">
				<input class="w-100 form-control" bind:value={memo} type="string" id="Contribution" aria-describedby="Contribution"/>
			</div>
		</div>
		<div>
			{#if canRegister}
			<button class="btn outline-light mr-2 text-info" on:click={() => submit()}>Register User</button>
			{:else}
			Unable to register
			{/if}
		</div>
	</div>
</section>

<style>
</style>
