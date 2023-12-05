<script>
  import { Link } from "svelte-navigator";
  import { useLocation } from "svelte-navigator";
  import { Button } from "carbon-components-svelte";

  const url = useLocation();

  export let to = "test";
  export let name = "test";
</script>

<div>
  <Link
    class="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500"
    {to}>{name}</Link
  >
</div>
