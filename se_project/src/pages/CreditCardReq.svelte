<script>
  import { Tile } from "carbon-components-svelte";
  import Account from "svelte-material-icons/Account.svelte";
  import { flip } from "svelte/animate";
  import { fly } from "svelte/transition";

  let users = [
    { name: "Adam K. Smith", score: 900 },
    { name: "Omar Khaled", score: 500 },
    { name: "Mohamed Ahmed", score: 700 },
    { name: "Ahmed Ali", score: 800 },
    { name: "Ali Mohamed", score: 600 },
    { name: "Khaled Omar", score: 400 },
    { name: "Smith Adam", score: 300 },
    { name: "Khaled Ali", score: 200 },
  ];

  const on_accept = (name) => {
    users = users.filter((user) => user.name != name);
  };
</script>

<div
  class="container flex flex-col"
  in:fly={{ duration: 200, y: -200 }}
  out:fly={{ duration: 200, y: 200 }}
>
  <h3 class="font-bold ml-5 mt-5">You have {users.length} new requests!</h3>

  <div class="page">
    <div class="card-container flex flex-wrap justify-center mb-10 mt-12">
      {#each users as user (user)}
        <div
          animate:flip
          class="mx-10 mt-10 w-80 px-10 max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
        >
          <div class="flex mt-10 flex-col items-center pb-10">
            <div
              class="w-24 h-24 content-center justify-center flex mb-3 rounded-full shadow-lg"
            >
              <Account size="5rem" />
            </div>
            <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">
              {user.name}
            </h5>
            <span class="text-sm text-gray-500 dark:text-gray-400"
              >Credit Score {user.score}</span
            >
            <div class="flex mt-4 space-x-3 md:mt-6">
              <button
                on:click={() => on_accept(user.name)}
                class="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >Accept</button
              >
              <button
                on:click={() => on_accept(user.name)}
                class="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700"
                >Reject</button
              >
            </div>
          </div>
        </div>
      {/each}
    </div>
  </div>
</div>
