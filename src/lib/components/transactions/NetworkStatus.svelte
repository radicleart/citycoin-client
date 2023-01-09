<script>
import { PostConditionMode } from 'micro-stacks/transactions';
import { getOpenContractCall } from '@micro-stacks/svelte';

const contractCall = getOpenContractCall();

const submit = async () => {
	proposal.startHeight = propStart
	const startHeight = uintCV(propStart)
	const proposalCV = contractPrincipalCV(contractId.split('.')[0], contractId.split('.')[1])
	let functionArgs = [proposalCV, startHeight]
	await $contractCall.openContractCall({
		postConditions: [],
		postConditionMode: PostConditionMode.Deny,
		contractAddress: import.meta.env.VITE_DAO_DEPLOY_ADDRESS,
		contractName: 'ede002-threshold-proposal-submission',
		functionName: 'propose',
		functionArgs: functionArgs,
		onFinish: data => {
			proposal.status = {name: 'submitting'};
			proposal.submitTxId = data.txId
			let url = import.meta.env.VITE_CLARITYLAB_API + '/daoapi/v2/proposals';
			postData(url, proposal)
		},
		onCancel: () => {
			console.log('popup closed!');
		},
    });
}
</script>

<section id="section3">
  <div class="row" style="height: 100%; width: 100%;">
    <div class="col-md-11 col-sm-12" style="height: 100%;">
      <div class="m-5">
        <div class="row">
          <div class="col-12"><h1><span class="strokeme">Transaction</span><br/>Network Status</h1></div>
          <div class="col-sm-6 col-xs-12 p-4">
          </div>
        </div>
      </div>
    </div>
  </div>
  
</section>

<style>
</style>
