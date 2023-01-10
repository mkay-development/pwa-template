<script>
  import "../tailwind.css";
</script>

<header class="mx-auto max-w-5xl my-2 flex justify-between">
  <h1 class="text-xl font-bold">Logo</h1>
  <nav>Test</nav>
</header>

<main class="mx-auto max-w-5xl my-2"><slot /></main>

<footer class="mx-auto max-w-5xl my-2">
  <div class="grid grid-cols-6">
    <div class="col-span-6 md:col-span-2">
      <a href="/impressum">Impressum</a> & <a href="/dateschutz">Datenschutz</a>
    </div>
    <div class="col-span-6 md:col-span-2">Made with by Jonathan</div>
    <div class="col-span-6 md:col-span-2">Copyright by Jonathan Martz</div>
  </div>
</footer>
