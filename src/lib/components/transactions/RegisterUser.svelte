<script lang="ts">
import { noneCV, someCV, bufferCV } from 'micro-stacks/clarity';
import { PostConditionMode } from 'micro-stacks/transactions';
import { getOpenContractCall } from '@micro-stacks/svelte';

const contractCall = getOpenContractCall();
export let transType:string;

$: memo = undefined;

const submit = async () => {
	const contractAddress = import.meta.env.VITE_NYC_CORE.split('.')[0];
	const contractName = import.meta.env.VITE_NYC_CORE.split('.')[1];
	let memoArg:any = noneCV();
	if (memo) {
		memoArg = someCV(bufferCV(memo));
	}
	await $contractCall.openContractCall({
		postConditions: [],
		postConditionMode: PostConditionMode.Deny,
		contractAddress: contractAddress,
		contractName: contractName,
		functionName: transType,
		functionArgs: [memoArg],
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
	<h3>{transType}</h3>
    <div>
		<div class="mb-3">
			<div class="">
				<input class="w-100 form-control" placeholder="memo" bind:value={memo} type="string" aria-describedby="Contribution"/>
			</div>
		</div>
		<div>
			{#if canRegister}
			<button class="btn btn-info text-white" on:click={() => submit()}>Send</button>
			{:else}
			Unable to register
			{/if}
		</div>
	</div>
</section>

<style>
</style>
