<script lang="ts">
  import { listCV, uintCV } from 'micro-stacks/clarity';
  import { FungibleConditionCode, PostConditionMode, makeStandardSTXPostCondition } from 'micro-stacks/transactions';
  import { getAuth, getAccount, getOpenContractCall } from '@micro-stacks/svelte';
  
  const contractCall = getOpenContractCall();
  export let transType:string;
  let errorMessage:string|undefined = undefined;
  const account = getAccount();

  $: numberBlocks = undefined;
  $: stxPerBlock = undefined;
  
  const submit = async () => {
    if (!numberBlocks || numberBlocks === 0) {
      errorMessage = "Number of blocks to mine for and amount of stx to commit to each block are both required.";
      return;
    }
    if (!stxPerBlock || stxPerBlock === 0) {
      errorMessage = "Number of blocks to mine for and amount of stx to commit to each block are both required.";
      return;
    }
    errorMessage = undefined;
    const contractAddress = import.meta.env.VITE_NYC_CORE.split('.')[0];
    const contractName = import.meta.env.VITE_NYC_CORE.split('.')[1];

    let mineManyArray = [];
    for (let i=0; i<numberBlocks; i++) {
      mineManyArray.push(uintCV(stxPerBlock));
    }
    let mineManyArrayCV = listCV(mineManyArray);
    await $contractCall.openContractCall({
      postConditions: [
        makeStandardSTXPostCondition(
          $account.stxAddress,
          FungibleConditionCode.Equal,
          stxPerBlock * numberBlocks
        ),
      ],
      postConditionMode: PostConditionMode.Deny,
      contractAddress: contractAddress,
      contractName: contractName,
      functionName: transType,
      functionArgs: [mineManyArrayCV],
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
            <label for="numberBlocks">Number of Blocks to Mine</label>
            <input id="numberBlocks" class="w-100 form-control" placeholder="Number of blocks to mine" bind:value={numberBlocks} type="string" aria-describedby="Contribution"/>
          </div>
        </div>
        <div class="mb-3">
          <div class="">
            <label for="stxPerBlock">uSTX Per Block</label>
            <input id="stxPerBlock" class="w-100 form-control" placeholder="STX to commit per block" bind:value={stxPerBlock} type="string" aria-describedby="Contribution"/>
          </div>
        </div>
        <div>
        {#if canRegister}
        <button class="btn btn-info text-white" on:click={() => submit()}>Send</button>
        {:else}
        Unable to register
        {/if}
      </div>
      {#if errorMessage}<div class="text-warning">{errorMessage}</div>{/if}
    </div>
  </section>
  
  <style>
  </style>
  