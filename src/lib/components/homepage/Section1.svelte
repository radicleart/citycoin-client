<script lang="ts">
// @ts-nocheck
import Header from "$lib/header/Header.svelte";
import { getAuth, getNetwork } from '@micro-stacks/svelte';
import NetworkStatus from '../transactions/NetworkStatus.svelte';
import MineMany from '../transactions/MineMany.svelte';
import MineTokens from '../transactions/MineTokens.svelte';
import RegisterUser from '../transactions/RegisterUser.svelte';
import { getStacksBlockHeight, getTotalMempoolTx } from "$lib/stacks";
import {onMount} from 'svelte'
import poster from '$lib/assets/cityscape-1.jpeg';

const auth = getAuth();
const network = import.meta.env.VITE_NETWORK; //getNetwork();

let assetId;
let version;
let transType;

const scrollTo = () => {
  const getMeTo = document.getElementById("footer-section");
  if (getMeTo) getMeTo.scrollIntoView({behavior: 'smooth'});
}

let mempoolTxCount = 0; 
let stacksBlockHeight = 0; 
onMount(async () => {
	mempoolTxCount = await getTotalMempoolTx(); 
	stacksBlockHeight = await getStacksBlockHeight(); 
})

</script>
  
<section id="section1" style="">
  <img src={poster} alt="night time" style="min-height: 100%; min-width: 100%; object-fit: cover;"/>
  <div class="content">
    <h1>
      City Coins Test Application
    </h1>
    {#if $auth.isSignedIn}
    <div class="row g-1 mb-3 bg-light text-dark py-2 px-2">
      <div class="col-2">{network} </div>
      <div class="col-2">Mem Pool: {mempoolTxCount}</div>
      <div class="col-2">Block Height: {stacksBlockHeight} </div>
      <div class="col-6"></div>
    </div>
    <div class="row g-1 mb-3">
      <div class="col-2">
        <select class="form-select" aria-label="Default select example" bind:value={version}>
          <option value="">Select Version</option>
          <option value="v2">V2</option>
        </select>
      </div>
      <div class="col-2">
        <select class="form-select" aria-label="Default select example" bind:value={assetId}>
          <option value="">Select City</option>
          <option value="nyc">{import.meta.env.VITE_NYC_CORE.split('.')[1]}</option>
          <option value="mia">{import.meta.env.VITE_MIA_CORE.split('.')[1]}</option>
        </select>
      </div>
      {#if assetId}
      <div class="col-2">
        <select class="form-select" aria-label="Default select example" bind:value={transType}>
          <option value="">Select Transaction</option>
          <option value="register-user">register-user</option>
          <option value="mine-tokens">mine-tokens</option>
          <option value="mine-many">mine-many</option>
        </select>
      </div>
      {/if}
    </div>
      {#if transType}
      <div class="row g-1 my-4 bg-light text-dark py-2 px-2">
        <div class="col-12">
          {#if transType === 'get-network-status'}
          <NetworkStatus />
          {:else if transType === 'mine-tokens'}
          <MineTokens {transType}/>
          {:else if transType === 'mine-many'}
          <MineMany {transType}/>
          {:else if transType === 'register-user'}
          <RegisterUser {transType}/>
          {/if}
        </div>
      </div>
      {/if}
    {:else}
      <span class="nav-item"><a href="/" class="pointer px-2">Connect Wallet</span>
    {/if}
  </div>
  <div class="section-footer">
    <div class="d-flex justify-content-between">
      <div></div>
      <div><span class="pointer" on:click={scrollTo}><img src="/img/png-assets/stx_eco_arrow_down.png" alt="Scroll down" width="30" height="auto" /></span></div>
      <div></div>
    </div>
  </div>
</section>

<style>
section {
  font-family: Gilroy-ExtraBold;
  min-width: 100vw;
  max-width: 100vw;
  min-height: 90vh;
  border: 0pt solid rgb(35, 183, 37);
}
.section-footer {
  position: absolute;
  height: auto;
  bottom: 500px;
  background: rgb(118, 112, 112, 0);
  color: #f1f1f1;
  width: 100%;
  text-align: right;
  padding: 5px 20px;
  border: 0pt solid rgb(85, 12, 12);
} 

/* Add some content at the bottom of the video/page
.content {
  position: fixed;
  bottom: 0;
  background: rgb(118, 112, 112, 0.5);
  color: #f1f1f1;
  width: 100%;
  padding: 40px;
} 
*/
.content {
  position: absolute;
  top: 7%;
  padding: 0 5vw;
  color: #fff;
  width: 100%;
  height: auto;
}

.content h1 {
  color: #fff;
  font-size: 2.5rem;
  letter-spacing: 0.1rem;
  line-height: 4.0rem;
  text-shadow: 5px 5px 30px rgb(40, 39, 36);
}
.content p {
  font-size: 1.6rem;
  letter-spacing: 0.1rem;
  font-weight: 700;
  line-height: auto;
  color: #ededed;
  text-shadow: 5px 5px 30px rgb(40, 39, 36);
}
@media screen and (min-width: 0px) and (max-width: 940px) {
  .content { 
    top: 0%;
  }
  .content h1 { 
    font-size: 4.0rem; 
    line-height: 4.0rem;
    text-shadow: 5px 5px 30px rgb(40, 39, 36);
  }
  .content p { 
    font-size: 1.8rem; 
    line-height: 2.4rem;
    text-shadow: 5px 5px 30px rgb(40, 39, 36);
  }  /* show it on small screens */
}
</style>
