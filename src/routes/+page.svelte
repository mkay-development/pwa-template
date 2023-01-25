<script>
  let projects = [
    {
      name: "Puria Bigdali",
      dev: "bigdali.mkay-development.de",
      live: 'www.puria-bigdali.de',
      tags: ['svelte', 'vite']
    },
    {
      name: "Imbiss Klotz",
      dev: "klotz.mkay-development.de",
      live: 'www.klotz-imbiss.de',
      tags: ['svelte', 'vite']
    },
    {
      name: "Holländer Diele",
      dev: "hollander.mkay-development.de",
      live: 'www.hollander-diele.de',
      tags: ['svelte', 'vite']
    },
    {
      name: "1st BSC Oberberg",
      dev: "bsc.mkay-development.de",
      live: 'www.erste-bsc-oberberg.de',
      tags: ['svelte', 'vite']
    },
    {
      name: "Olaf Linscheid",
      dev: "linscheid.mkay-development.de",
      live: 'www.olaf-linscheid.de',
      tags: ['vuejs', 'vite']
    },
    {
      name: "Elektro Thomas",
      dev: "thomas.mkay-development.de",
      // live: 'www.puria-bigdali.de',
      tags: ['vuejs', 'vite']
    },
    {
      name: "Guidos Studio",
      dev: "guidos.mkay-development.de",
      live: 'www.guidos.studio',
      tags: ['vuejs', 'vite', 'laravel']
    },
    {
      name: "Primetime",
      dev: "primetime.mkay-development.de",
      // live: 'www.puria-bigdali.de',
      tags: ['vuejs', 'vite']
    },
    {
      name: "Come In",
      dev: "rocks.mkay-development.de",
      live: 'www.com-in.rocks',
      tags: ['svelte', 'vite']
    },
    {
      name: "Mauelshagen",
      dev: "mauelshagen.mkay-development.de",
      live: 'www.mauelshagen-baustoffe.de',
      tags: ['svelte', 'vite']
    },
    {
      name: "Sohbet Grill",
      dev: "shopbetgrill.mkay-development.de",
      // live: 'www.puria-bigdali.de',
      tags: ['svelte', 'vite']
    },
    {
      name: "Sikom 2 - Shop",
      dev: "sikom.mkay-development.de",
      live: 'www.sikom2.shop',
      tags: ['svelte', 'vite']
    },
    {
      name: "Selamhh Imbiss",
      dev: "selamh.mkay-development.de",
      // live: 'www.puria-bigdali.de',
      tags: ['svelte', 'vite']
    },
    {
      name: "Pütchens Getränkecenter",
      dev: "pütchens.mkay-development.de",
      // live: 'www.puria-bigdali.de',
      tags: ['svelte', 'vite']
    },
    {
      name: "Kerntopp Shop",
      dev: "kerntopp.mkay-development.de",
      live: 'www.kerntopp.shop',
      tags: ['svelte', 'vite']
    },
  ];
</script>

<h2 class="font-bold">Projekte Seite MkaY Development</h2>
<div class="grid grid-cols-6 gap-3 mt-5">
  <div class="col-span-6 md:col-span-2">
    <section class="card bg-white px-2 py-2 border border-black">
      <p class="py-2 text-center">Kunden Projekte</p>
    </section>
  </div>
  <div class="col-span-6 md:col-span-2">
    <section class="card bg-white px-2 py-2 border border-black">
      <p class="py-2 text-center">Eigene Projekte</p>
    </section>
  </div>
  <div class="col-span-6 md:col-span-2">
    <section class="card bg-white px-2 py-2 border border-black">
      <p class="py-2 text-center">Projekte aus Spaß</p>
    </section>
  </div>
</div>

<h2 class="font-bold text-lg mt-5">Kunden Projekte</h2>
<div class="grid grid-cols-6 mt-5 gap-3">
  {#each projects as project}
    <div class="col-span-6 md:col-span-2">
      <section class="card bg-white rounded-lg px-2 py-2">
        <img
          src="https://via.placeholder.com/480x320.png?text=MkaY+Development"
          alt=""
        />
        <h3 class="py-2 text-center font-bold">{project.name}</h3>
        <p class="text-center">Development: <a href=https://{project.dev} class="text-blue-600 text-center block">{project.dev}</a></p>
        <p class="text-center">Live: <a href=https://{project.live} class="text-blue-600 text-center block">{project.live}</a></p>
      </section>
    </div>
  {/each}
</div>
