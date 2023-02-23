<script lang="ts">
  import { onMount } from "svelte";
  import PocketBase from "pocketbase";
  import {
    faEye,
    faLockOpen,
    faPlus,
    faTrash,
    faLock,
  } from "@fortawesome/free-solid-svg-icons";
  import Fa from "svelte-fa";
  import { goto } from "$app/navigation";

  let items = [];

  let load = async function () {
    const pb = new PocketBase("https://08qxg0fs1f7fl9s.pocketbase.tech");

    // fetch a paginated records list
    const result = await pb.collection("databases").getList(1, 20);
    items = result.items;
  };

  let unlock = async function (id: string) {
    const pb = new PocketBase("https://08qxg0fs1f7fl9s.pocketbase.tech");
    const data = {
      secure: false,
    };
    const record = await pb.collection("databases").update(id, data);
    load();
  };

  let view = function (id: string) {
    goto("/database/" + id);
  };

  let add = function () {
    goto("/databases/add");
  };

  let lock = async function (id: string) {
    const pb = new PocketBase("https://08qxg0fs1f7fl9s.pocketbase.tech");
    const data = {
      secure: true,
    };
    await pb.collection("databases").update(id, data);
    load();
  };

  let remove = async function (id: string) {
    const pb = new PocketBase("https://08qxg0fs1f7fl9s.pocketbase.tech");
    await pb.collection("databases").delete(id);
    load();
  };

  onMount(() => {
    load();
  });
</script>

<div class="headline flex justify-between">
  <h2 class="font-bold text-lg">Datenbanken</h2>
  <section class="actions mr-2">
    <button on:click={add} class="px-2 py-2 bg-white"
      ><Fa icon={faPlus} size="1.5x" /></button
    >
  </section>
</div>

<div class="grid grid-cols-6 text-sm bg-gray-400 px-2 py-2 gap-3 font-bold">
  <div class="col-span-6 md:col-span-1">Id</div>
  <div class="col-span-6 md:col-span-2">Name</div>
  <div class="col-span-6 md:col-span-1">Status</div>
  <div class="col-span-6 md:col-span-2">Aktionen</div>
</div>

{#each items as item}
  <div class="grid grid-cols-6 gap-3 px-2 py-2 bg-white">
    <div class="col-span-6 md:col-span-1">{item.id}</div>
    <div class="col-span-6 md:col-span-2">{item.name}</div>
    <div class="col-span-6 md:col-span-1">{item.status}</div>
    <div class="col-span-6 md:col-span-2">
      <section class="actions">
        {#if item.secure}
          <button
            class="bg-gray-400 px-2 py-2"
            on:click={function () {
              unlock(item.id);
            }}
          >
            <Fa icon={faLockOpen} /></button
          >
        {:else}
          <button
            class="bg-gray-400 px-2 py-2"
            on:click={function () {
              lock(item.id);
            }}
          >
            <Fa icon={faLock} /></button
          >
        {/if}

        {#if !item.secure}
          <button
            class="bg-gray-400 px-2 py-2"
            on:click={function () {
              remove(item.id);
            }}><Fa icon={faTrash} /></button
          >
        {/if}
        <button
          class="bg-gray-400 px-2 py-2"
          on:click={function () {
            view(item.id);
          }}><Fa icon={faEye} /></button
        >
      </section>
    </div>
  </div>
{/each}
