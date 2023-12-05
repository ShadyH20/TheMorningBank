<script>
  import { flip } from "svelte/animate";
  import Account from "svelte-material-icons/Account.svelte";
  import { fly } from "svelte/transition";

  let users = [
    { id: 1, name: "Adam K. Smith", time: "2 days ago", amount: 1000, reason: "for a car" },
    { id: 2, name: "Omar Khaled", time: "3 days ago", amount: 200000, reason:"business expenses" },
    { id: 3, name: "Mohamed Ahmed", time: "4 days ago", amount: 1000000, reason: "for a house" },
    { id: 4, name: "Ahmed Ali", time: "5 days ago", amount: 60000, reason: "for a car" },
    { id: 5, name: "Ali Mohamed", time: "6 days ago", amount: 10020000, reason: 'start a new business' },
  ];

  const on_accept = (name) => {
    users = users.filter((user) => user.name != name);
  };
</script>

<div
  class="container flex flex-wrap justify-center content-center w-screen pb-80 mb-80"
  in:fly={{ duration: 200, y: -200 }}
  out:fly={{ duration: 200, y: 200 }}
>
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
          > Requesting {user.amount} EGP</span
        >
        <span class="text-sm font-bold text-gray-500 dark:text-gray-400"
        >{user.reason}</span
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
