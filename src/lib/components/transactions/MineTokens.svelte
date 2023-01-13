<script lang="ts">
  import { uintCV, noneCV, someCV, bufferCV } from 'micro-stacks/clarity';
  import { FungibleConditionCode, PostConditionMode, makeStandardSTXPostCondition } from 'micro-stacks/transactions';
  import { getAuth, getAccount, getOpenContractCall } from '@micro-stacks/svelte';

  const contractCall = getOpenContractCall();
  export let transType:string;
  let errorMessage:string|undefined = undefined;
  const auth = getAuth();
  const account = getAccount();

  $: amountUstx = undefined;
  $: memo = undefined;
  
  const submit = async () => {
    if (!amountUstx || amountUstx === 0) {
      errorMessage = "Amount of stx to commit is required.";
      return;
    }
    errorMessage = undefined;
    const contractAddress = import.meta.env.VITE_NYC_CORE.split('.')[0];
    const contractName = import.meta.env.VITE_NYC_CORE.split('.')[1];

    let memoArg:any = noneCV();
    if (memo) {
      memoArg = someCV(bufferCV(memo));
    }
    await $contractCall.openContractCall({
      postConditions: [
        makeStandardSTXPostCondition(
          $account.stxAddress,
          FungibleConditionCode.Equal,
          amountUstx
        ),
      ],
      postConditionMode: PostConditionMode.Deny,
      contractAddress: contractAddress,
      contractName: contractName,
      functionName: transType,
      functionArgs: [uintCV(amountUstx), memoArg],
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
    <p>{$account.stxAddress}</p>
    <div>
        <div class="mb-3">
          <div class="">
            <label for="memo">Memo (optional)</label>
            <input id="memo" class="w-100 form-control" placeholder="Memo" bind:value={memo} type="string" aria-describedby="Contribution"/>
          </div>
        </div>
        <div class="mb-3">
          <div class="">
            <label for="stxPerBlock">Amount uSTX</label>
            <input id="stxPerBlock" class="w-100 form-control" placeholder="STX to commit per block" bind:value={amountUstx} type="string" aria-describedby="Contribution"/>
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
  