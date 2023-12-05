<script>
  import { flip } from "svelte/animate";
  import Account from "svelte-material-icons/Account.svelte";
  import { fade, fly } from "svelte/transition";
  import { viewport } from "@popperjs/core";

  let users = [
    {
      location: "view past transactions page",
      name: "Adam K. Smith",
      issue: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio odio suscipit quos beatae doloremque accusantium quasi, reprehenderit incidunt, quam qui repellendus veniam commodi vero magnam nihil recusandae quibusdam consectetur id.
  Dolorem dolore animi aliquid esse iusto sint perferendis veritatis cum. Possimus nobis dolorem sequi quod tenetur atque dolorum recusandae dignissimos, laboriosam, sapiente, ipsum earum magni consectetur! Eos, minus. Blanditiis, aspernatur?`,
      status: "pending",
      employee: "Ahmed Ali",
    },
    {
      location: "new bank account page",
      name: "Omar Khaled",
      issue: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio odio suscipit quos beatae doloremque accusantium quasi, reprehenderit incidunt, quam qui repellendus veniam commodi vero magnam nihil recusandae quibusdam consectetur id.
    Dolorem dolore animi aliquid esse iusto sint perferendis veritatis cum. Possimus nobis dolorem sequi quod tenetur atque dolorum recusandae dignissimos, laboriosam, sapiente, ipsum earum magni consectetur! Eos, minus. Blanditiis, aspernatur?`,
      status: "resolved",
      employee: "Ahmed Ali",
    },
    {
      location: "card replacement page",
      name: "Mohamed Ahmed",
      issue: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio odio suscipit quos beatae doloremque accusantium quasi, reprehenderit incidunt, quam qui repellendus veniam commodi vero magnam nihil recusandae quibusdam consectetur id.
        Dolorem dolore animi aliquid esse iusto sint perferendis veritatis cum. Possimus nobis dolorem sequi quod tenetur atque dolorum recusandae dignissimos, laboriosam, sapiente, ipsum earum magni consectetur! Eos, minus. Blanditiis, aspernatur?`,
      status: "updated!",
      employee: "Ahmed Ali",
    },
    {
      location: "homepage",
      name: "Ahmed Ali",
      issue: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio odio suscipit quos beatae doloremque accusantium quasi, reprehenderit incidunt, quam qui repellendus veniam commodi vero magnam nihil recusandae quibusdam consectetur id.
            Dolorem dolore animi aliquid esse iusto sint perferendis veritatis cum. Possimus nobis dolorem sequi quod tenetur atque dolorum recusandae dignissimos, laboriosam, sapiente, ipsum earum magni consectetur! Eos, minus. Blanditiis, aspernatur?`,
      status: "resolved",
      employee: "Ahmed Ali",
    },
    {
      location: "transaction page",
      name: "Ali Mohamed",
      issue: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio odio suscipit quos beatae doloremque accusantium quasi, reprehenderit incidunt, quam qui repellendus veniam commodi vero magnam nihil recusandae quibusdam consectetur id.
                Dolorem dolore animi aliquid esse iusto sint perferendis veritatis cum. Possimus nobis dolorem sequi quod tenetur atque dolorum recusandae dignissimos, laboriosam, sapiente, ipsum earum magni consectetur! Eos, minus. Blanditiis, aspernatur?`,
      status: "pending",
      employee: "Ahmed Ali",
    },
    {
      location: "create account page",
      name: "Khaled Omar",
      issue: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio odio suscipit quos beatae doloremque accusantium quasi, reprehenderit incidunt, quam qui repellendus veniam commodi vero magnam nihil recusand
                    ae quibusdam consectetur id.`,
      employee: "Ahmed Ali",
      status: "pending",
    },
  ];

  $: users = users.sort((a, b) => (a.status > b.status ? 1 : -1));
  const on_resolve = (name) => {
    users = users.filter((user) => user.name != name);
  };

  let view_user = {
    location: "credit card page",
    name: "Adam K. Smith",
    issue: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio odio suscipit quos beatae doloremque accusantium quasi, reprehenderit incidunt, quam qui repellendus veniam commodi vero magnam nihil recusandae quibusdam consectetur id.
  Dolorem dolore animi aliquid esse iusto sint perferendis veritatis cum. Possimus nobis dolorem sequi quod tenetur atque dolorum recusandae dignissimos, laboriosam, sapiente, ipsum earum magni consectetur! Eos, minus. Blanditiis, aspernatur?`,
    status: "pending",
    employee: "Ahmed Ali",
  };

  let modal_hidden = true;
  const view_modal = (user) => {
    view_user = user;
    modal_hidden = false;
  };

  const close_user = () => {
    modal_hidden = true;
  };
</script>

<!-- Main modal -->
{#key modal_hidden}
  <div
    class="container w-screen {modal_hidden
      ? 'hidden'
      : ''} h-screen fixed top-0 z-50 flex justify-center content-center items-center"
    on:click={() => close_user()}
  >
    <div
      class="overlay w-screen {modal_hidden
        ? 'hidden'
        : ''} h-screen fixed bg-black top-0 z-50 flex justify-center content-center items-center opacity-70"
      in:fade={{ duration: 200 }}
      out:fade={{ duration: 200 }}
    />
    <div
      class="z-50 p-4 overflow-x-hidden overflow-y-auto opacity-100"
      in:fly={{ y: 200, duration: 200 }}
      out:fly={{ y: -200, duration: 200 }}
    >
      <div
        class="relative w-full max-w-2xl max-h-full opacity-100 bg-white p-10 rounded"
      >
        <!-- Modal content -->

        <ol class="relative border-l border-gray-200 dark:border-gray-700">
          <li class="mb-10 ml-6">
            <span
              class="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900"
            >
              <Account />
            </span>
            <div
              class="items-center justify-between p-4 bg-white border border-gray-200 rounded-lg shadow-sm sm:flex dark:bg-gray-700 dark:border-gray-600"
            >
              <time
                class="mb-1 text-xs font-normal text-gray-400 sm:order-last sm:mb-0"
                >just now</time
              >
              <div class="text-sm font-normal text-gray-500 dark:text-gray-300">
                <a
                  href="#"
                  class="font-semibold text-blue-600 dark:text-blue-500 hover:underline"
                  >{view_user.employee}</a
                >
                has set the status to
                <span
                  class="bg-gray-100 text-gray-800 text-xs font-normal mr-2 px-2.5 py-0.5 rounded dark:bg-gray-600 dark:text-gray-300"
                  >{view_user.status}</span
                >
              </div>
            </div>
          </li>
          <li class="mb-10 ml-6">
            <span
              class="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900"
            >
              <Account />
            </span>
            <div
              class="p-4 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-700 dark:border-gray-600"
            >
              <div class="items-center justify-between mb-3 sm:flex">
                <time
                  class="mb-1 text-xs font-normal text-gray-400 sm:order-last sm:mb-0"
                  >2 hours ago</time
                >
                <div
                  class="text-sm font-normal text-gray-500 lex dark:text-gray-300"
                >
                  {view_user.name} wrote on isssue regarding
                  <a
                    href="#"
                    class="font-semibold text-gray-900 dark:text-white hover:underline"
                    >{view_user.location}</a
                  >
                </div>
              </div>
              <div
                class="p-3 text-xs italic font-normal text-gray-500 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-600 dark:border-gray-500 dark:text-gray-300"
              >
                {view_user.issue}
              </div>
            </div>
          </li>
          <li class="ml-6">
            <span
              class="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900"
            >
              <Account />
            </span>
            <div
              class="items-center justify-between p-4 bg-white border border-gray-200 rounded-lg shadow-sm sm:flex dark:bg-gray-700 dark:border-gray-600"
            >
              <time
                class="mb-1 text-xs font-normal text-gray-400 sm:order-last sm:mb-0"
                >1 day ago</time
              >
              <div
                class="text-sm font-normal text-gray-500 lex dark:text-gray-300"
              >
                {view_user.name} has made a new ticket
                <a
                  href="#"
                  class="font-semibold text-blue-600 dark:text-blue-500 hover:underline"
                  >{view_user.location}</a
                >
              </div>
            </div>
          </li>
        </ol>
      </div>
    </div>
  </div>
{/key}

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
        <span class="text-sm text-gray-500 dark:text-gray-400">
          {user.issue.substring(0, 100)}...</span
        >
        {#if user.status == "pending"}
          <span class="text-sm font-bold text-yellow-500">{user.status}</span>
        {/if}
        {#if user.status == "updated!"}
          <span class="text-sm font-bold text-red-500">{user.status}</span>
        {/if}
        {#if user.status == "resolved"}
          <span class="text-sm font-bold text-green-500">{user.status}</span>
        {/if}

        <div class="flex mt-4 space-x-3 md:mt-6">
          <button
            on:click={() => on_resolve(user.name)}
            class="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >Resolve</button
          >
          <a
            on:click={() => view_modal(user)}
            class="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700"
            >see updates</a
          >
        </div>
      </div>
    </div>
  {/each}
</div>
