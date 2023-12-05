<script>
  import { flip } from "svelte/animate";
  import { fade, fly } from "svelte/transition";

  let users = [
    { id: 1, name: "Adam K. Smith", time: "2 days ago" },
    { id: 2, name: "Omar Khaled", time: "3 days ago" },
    { id: 3, name: "Mohamed Ahmed", time: "4 days ago" },
    { id: 4, name: "Ahmed Ali", time: "5 days ago" },
    { id: 5, name: "Ali Mohamed", time: "6 days ago" },
    { id: 6, name: "Khaled Omar", time: "7 days ago" },
    { id: 7, name: "Smith Adam", time: "8 days ago" },
    { id: 8, name: "Khaled Ali", time: "9 days ago" },
  ];

  let view_user = {};

  let modal_hidden = true;

  const show_user = (user) => {
    view_user = user;
    modal_hidden = false;
  };
  const remove_user = (user) => {
    users = users.filter((u) => u.id != user.id);
    modal_hidden = true;
  };
</script>

<!-- Main modal -->
{#key modal_hidden}
  <div
    class="container w-screen {modal_hidden
      ? 'hidden'
      : ''} h-screen fixed top-0 z-50 flex justify-center content-center items-center"
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
      <div class="relative w-full max-w-2xl max-h-full opacity-100">
        <!-- Modal content -->
        <div
          class="relative bg-white rounded-lg shadow dark:bg-gray-700 opacity-100"
        >
          <!-- Modal header -->
          <div
            class="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600 opacity-100"
          >
            <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
              {view_user.name}
            </h3>
            <button
              on:click={() => {
                modal_hidden = true;
              }}
              type="button"
              class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
              data-modal-hide="staticModal"
            >
              <svg
                class="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
                ><path
                  fill-rule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                /></svg
              >
            </button>
          </div>
          <!-- Modal body -->
          <div class="modal-body flex gap-10 mx-10">
            <div class="info">
              <p class="text-gray-600">Reason</p>
              <p>Lost at sea</p>
            </div>
            <div class="info">
              <p class="text-gray-600">Time lost</p>
              <p>12 may 2023 at 12:23PM</p>
            </div>
          </div>
          <!-- Modal footer -->
          <div
            class="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600"
          >
            <button
              on:click={() => {
                remove_user(view_user);
              }}
              data-modal-hide="staticModal"
              type="button"
              class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >Accept</button
            >
            <button
              on:click={() => {
                remove_user(view_user);
              }}
              data-modal-hide="staticModal"
              type="button"
              class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
              >Decline</button
            >
          </div>
        </div>
      </div>
    </div>
  </div>
{/key}

<div
  class="container flex flex-col justify-center content-center w-screen"
  in:fly={{ duration: 200, y: -200 }}
  out:fly={{ duration: 200, y: 200 }}
>
  {#each users as user (user)}
    <div
      animate:flip
      class="card flex flex-col mx-auto justify-center content-center"
    >
      <div
        class="flex w-screen flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
      >
        <div
          class="flex flex-col w-full content-center justify-center p-4 leading-normal"
        >
          <div class="title flex w-full">
            <h5
              class="mb-2 text-2xl flex-1 font-bold text-gray-900 dark:text-white"
            >
              {user.name}
            </h5>
            <p
              class="mb-3 float-right flex-none ml-auto font-normal text-gray-700 dark:text-gray-400"
            >
              {user.time}
            </p>
          </div>
          <p
            class="font-bold cursor-pointer text-blue-500"
            on:click={() => {
              show_user(user);
            }}
          >
            view >>
          </p>
        </div>
      </div>
    </div>
  {/each}
</div>
