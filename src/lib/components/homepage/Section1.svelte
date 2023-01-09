<script>
// @ts-nocheck
import Header from "$lib/header/Header.svelte";
import { getAuth  } from "@micro-stacks/svelte";
import NetworkStatus from '../transactions/NetworkStatus.svelte';
import MineMany from '../transactions/MineMany.svelte';
import RegisterUser from '../transactions/RegisterUser.svelte';
import { getStacksBlockHeight, getTotalMempoolTx } from "$lib/stacks";
import {onMount} from 'svelte'

const auth = getAuth();
// medium 
const poster = 'https://images.prismic.io/edao/940fb69d-caf5-496c-9466-0901ecd41eda_nighttime.jpg?auto=compress,format';
export let homepage;

// Pause and play the video, and change the button text
let transType;
const openTx = (txType) => {
	transType = txType;
}
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
  <Header {homepage}/>
  <img height="1000px" src={poster} alt="night time"/>
  <!-- Optional: some overlay text to describe the video 
  <video muted loop id="myVideo">
    <source src={poster} type="video/mp4">
  </video>
  -->

  <div class="content">
    <h1>
      City Coins.
    </h1>
    <p>City Coins Migration Test Application.</p>
    {#if $auth.isSignedIn}
      <div>
        <p>Transactions..</p>
        <p>mempoolTxCount = {mempoolTxCount}</p>
        <p>stacksBlockHeight = {stacksBlockHeight}</p>
        <ul>
          <li>
            <a href="/" class="pointer" style="vertical-align: middle;" on:click|preventDefault={() => openTx('get-network-status')}><span>get-network-status</span></a>    
          </li>
          <li>
            <a href="/" class="pointer" style="vertical-align: middle;" on:click|preventDefault={() => openTx('mine-many')}><span>mine-many</span></a>    
          </li>
          <li>
            <a href="/" class="pointer" style="vertical-align: middle;" on:click|preventDefault={() => openTx('register-user')}><span>register-user</span></a>    
          </li>
        </ul>
      </div>
      {#if transType}
      <p>Transaction : {transType}</p>
        {#if transType === 'get-network-status'}
        <NetworkStatus />
        {:else if transType === 'mine-many'}
        <MineMany />
        {:else if transType === 'register-user'}
        <RegisterUser />
        {/if}
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
  min-height: 100vh;
  border: 0pt solid rgb(35, 183, 37);
}
.section-footer {
  position: absolute;
  height: auto;
  bottom: 0;
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
  top: 30%;
  padding-left: 5vw;
  color: #fff;
  width: 100%;
  height: auto;
}

.content h1 {
  color: #fff;
  font-size: 4.5rem;
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
    top: 20%;
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
