<script>
  import "../tailwind.css";
  import Fa from "svelte-fa";
  import {
    faHeart,
    faRightFromBracket,
    faUser,
  } from "@fortawesome/free-solid-svg-icons";
  import { init, isLoggedIn } from "../stores/user";
  import { onMount } from "svelte";
  import { page } from "$app/stores";
  import { goto } from "$app/navigation";

  $: $page,
    (function () {
      if ($page.route.id == "/login") {
        goto("/");
      }
    })();

  onMount(function () {
    init();
    if (isLoggedIn) {
      if ($page.route.id == "/login") {
        goto("/");
      }
    }
  });
</script>

<header class="mx-auto max-w-5xl my-2 flex justify-between px-2 py-2">
  <h1 class="text-xl font-bold"><a href="/">Logo</a></h1>
  <nav class="">
    <ul class="flex space-x-5">
      {#if !$isLoggedIn}
        <li>
          <a href="/login"><Fa icon={faUser} size="1.5x" /></a>
        </li>
      {/if}

      {#if $isLoggedIn}
        <li>
          <a href="/user/profile"><Fa icon={faUser} size="1.5x" /></a>
        </li>
        <li>
          <a href="/logout"><Fa icon={faRightFromBracket} size="1.5x" /></a>
        </li>
      {/if}
    </ul>
  </nav>
</header>

<main class="mx-auto max-w-5xl my-2 px-2 py-2"><slot /></main>

<footer class="mx-auto max-w-5xl my-2 px-2 py-2">
  <div class="grid grid-cols-6">
    <div class="col-span-6 md:col-span-2">
      <a href="/impressum">Impressum</a> &
      <a href="/data-privacy">Datenschutz</a>
    </div>
    <div class="col-span-6 md:col-span-2 flex">
      Made with <Fa icon={faHeart} class="mx-2 mt-1 text-red-400" /> by Jonathan
    </div>
    <div class="col-span-6 md:col-span-2">
      Copyright by <a
        href="https://www.mkay-development.de"
        class="text-blue-600">MkaY Development</a
      >
    </div>
  </div>
</footer>
