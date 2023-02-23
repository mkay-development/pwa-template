<script>
  import PocketBase from "pocketbase";
  import { onMount } from "svelte";
  import { page } from "$app/stores";
  import { faLockOpen, faLock } from "@fortawesome/free-solid-svg-icons";
  import Fa from "svelte-fa";
  import { goto } from "$app/navigation";

  let item = {};

  let load = async function () {
    const pb = new PocketBase("https://08qxg0fs1f7fl9s.pocketbase.tech");

    const record = await pb.collection("databases").getOne($page.params.id);
    item = record;
  };

  let unlock = async function (id) {
    const pb = new PocketBase("https://08qxg0fs1f7fl9s.pocketbase.tech");
    const data = {
      secure: false,
    };
    const record = await pb.collection("databases").update(id, data);
    window.location.reload();
  };

  let view = function (id) {
    goto("/database/" + id);
  };

  let lock = async function (id) {
    const pb = new PocketBase("https://08qxg0fs1f7fl9s.pocketbase.tech");
    const data = {
      secure: true,
    };
    const record = await pb.collection("databases").update(id, data);
    window.location.reload();
  };

  onMount(function () {
    load();
  });
</script>

<h2 class="font-bold text-lg">Datenbank ({$page.params.id})</h2>

<div class="grid grid-cols-6 gap-3">
  <div class="col-span-6 md:col-span-2">
    <img
      src="https://via.placeholder.com/480x320.png?text=MkaY+Development"
      alt=""
    />
    <section class="actions flex">
      <span class="mt-3 mr-2"><b>Aktionen:</b></span>
      {#if item.secure}
        <button
          class="bg-gray-400 px-2 py-2 mt-2"
          on:click={function () {
            unlock(item.id);
          }}
        >
          <Fa icon={faLockOpen} /></button
        >
      {:else}
        <button
          class="bg-gray-400 px-2 py-2 mt-2"
          on:click={function () {
            lock(item.id);
          }}
        >
          <Fa icon={faLock} /></button
        >
      {/if}
    </section>
  </div>
  <div class="col-span-6 md:col-span-2">
    <b>Erstellt:</b>
    {new Date(item.created).toLocaleString()}
    <br />
    <b>Aktualisiert:</b>
    {new Date(item.updated).toLocaleString()}
    <hr class="border-red-400 border-2 my-4" />
    <label for="password">Passwort</label>
    <input
      type="password"
      id="password"
      class="w-full px-2 py-2 text-center"
      disabled
      bind:value={item.password}
    />
  </div>
  <div class="col-span-6 md:col-span-2">
    <b>Name:</b>
    {item.name} <br />
    <b>Id:</b>
    {item.id} <br /><b>Admin:</b>
    {item.admin} <br />
    <b>Status: </b>
    {item.status} <br />
  </div>
</div>
