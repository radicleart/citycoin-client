<script lang="ts">
import "../app.scss";
import "../forum.scss";
import {tick, onMount} from 'svelte';
import Homepage from "$lib/components/homepage/Homepage.svelte";
import Header from "$lib/header/Header.svelte";
import Footer from "$lib/header/Footer.svelte";
import { page } from "$app/stores";
import Notifications from 'svelte-notifications';
import { getAccount, getNetwork } from '@micro-stacks/svelte';
import { getAuth } from "@micro-stacks/svelte";
import { mountClient, getMicroStacksClient } from "@micro-stacks/svelte";
import { client } from "../stores/client";

export const prerender = true;

let origin = import.meta.env.VITE_ORIGIN;
if (typeof window !== 'undefined') {
  origin = window.location.origin;
}

let homepage = false;
if ($page.url.pathname === '/') {
  homepage = true;
}
const config = {
  appName: 'City Coins Test App',
  appIconUrl: origin + '/img/logo.png',
  network: import.meta.env.VITE_NETWORK
};
mountClient(config);
client.set(getMicroStacksClient());
const network = getNetwork();
const auth = getAuth();
const account = getAccount();

let bootstrap: { Tooltip: new (arg0: any) => any; Dropdown: new (arg0: any) => any; };
let four01 = false;

let appInitialized:boolean = false;
onMount(async () => {
  try {
    // $network.setNetwork(import.meta.env.VITE_NETWORK);
    bootstrap = (await import('bootstrap'));
    //holdings.init($account.stxAddress);
    appInitialized = true;
    console.log("Page=", page);
    await tick();
    setTimeout(function () {
      const tooltipTriggerList = window.document.querySelectorAll('[data-bs-toggle="tooltip"]');
      if (tooltipTriggerList) [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));
      const popoverTriggerList = window.document.querySelectorAll('[data-bs-toggle="dropdown"]');
      if (popoverTriggerList) [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Dropdown(popoverTriggerEl));
    }, 1000)
  } catch(error) {
        console.log(error);
  }
})
</script>

<Header {homepage}/>
<Homepage {homepage}/>
<Footer />

<style>
main {
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 1rem;
    width: 100%;
    max-width: 1024px;
    margin: 0 auto;
    box-sizing: border-box;
}
</style>
