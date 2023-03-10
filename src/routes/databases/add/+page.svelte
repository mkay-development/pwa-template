<script>
  import { goto } from "$app/navigation";
  import PocketBase from "pocketbase";
  import { authData } from "../../../stores/user.js";

  let name = "";
  let password = "";
  let create = async function () {
    const pb = new PocketBase("https://08qxg0fs1f7fl9s.pocketbase.tech");

    const data = {
      name,
      admin: $authData.model.id,
      password,
      status: "live",
      host: "test",
      secure: false,
    };

    await pb.collection("databases").create(data);
    goto("/databases");
  };
</script>

<div class="grid grid-cols-6">
  <div class="col-span-6 md:col-span-3">
    <div class="form">
      <div class="form-control mb-2">
        <label for="name" class="block font-bold text-sm px-2 py-2 bg-gray-400"
          >Name</label
        >
        <input
          type="emanameil"
          bind:value={name}
          id="name"
          class="px-2 py-2 bg-white w-full"
          placeholder="mail@jmartz.de"
        />
      </div>
      <div class="form-control mb-2">
        <label
          for="password"
          class="block font-bold text-sm px-2 py-2 bg-gray-400">Passwort</label
        >
        <input
          type="password"
          bind:value={password}
          id="password"
          class="px-2 py-2 bg-white w-full"
          placeholder="mail@jmartz.de"
        />
      </div>

      <section class="actions">
        <button on:click={create}>Test</button>
      </section>
    </div>
  </div>
  <div class="col-span-6 md:col-span-3">Test</div>
</div>
