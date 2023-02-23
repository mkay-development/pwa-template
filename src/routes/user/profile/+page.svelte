<script>
  import { onMount } from "svelte";
  import PocketBase from "pocketbase";

  let user = {};

  onMount(async function () {
    const pb = new PocketBase("https://08qxg0fs1f7fl9s.pocketbase.tech");
    const authData = await pb.collection("users").authRefresh();
    user = authData.record;
  });
</script>

<div class="grid grid-cols-6">
  <div class="col-span-6 md:col-span-2">
    <img
      class="rounded-full mx-auto my-6"
      src="https://08qxg0fs1f7fl9s.pocketbase.tech/api/files/_pb_users_auth_/{user.id}/{user.avatar}?thumb=100x100"
      alt=""
    />
    <h2 class="font-bold block text-center">{user.name}</h2>
    <p class="block text-center">Id: {user.id}</p>
  </div>
  <div class="col-span-6 md:col-span-4">Test</div>
</div>
