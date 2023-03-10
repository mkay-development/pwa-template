<script>
	import { token } from './../../stores/user.js';
  import PocketBase from "pocketbase";

  let email = '';
  let password = '';

  let login = async function () {
    const pb = new PocketBase("https://08qxg0fs1f7fl9s.pocketbase.tech");

    const authData = await pb
      .collection("users")
      .authWithPassword(email, password);

    if(authData.token){
        token.set(authData.token);
    }
  };
</script>

<div class="grid grid-cols-6 gap-3">
  <div class="col-span-6 md:col-span-2">
    <div class="form">
      <div class="form-control mb-2">
        <label for="email" class="block font-bold text-sm px-2 py-2 bg-gray-400"
          >Email</label
        >
        <input
          type="email"
          bind:value={email}
          id="email"
          class="px-2 py-2 bg-white w-full"
          placeholder="mail@jmartz.de"
        />
      </div>
      <div class="form-control mb-2">
        <label
          for="password"
          class="block font-bold text-sm px-2 py-2 bg-gray-400">Password</label
        >
        <input
          type="password"
          bind:value={password}
          id="password"
          class="px-2 py-2 bg-white w-full"
          placeholder="password123"
        />
      </div>
      <div class="actions text-right">
        <button class="px-2 py-2 bg-white font-bold text-sm" on:click={login}>login</button>
      </div>
    </div>
  </div>
  <div class="col-span-6 md:col-span-4">Test</div>
</div>
