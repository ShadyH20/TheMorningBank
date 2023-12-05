<script>
  // @ts-nocheck

  import { Button, Modal } from "carbon-components-svelte";
  import { user_account } from "../lib/stores";

  import { Link } from "carbon-components-svelte";
  import {
    Form,
    Checkbox,
    Select,
    SelectItem,
    PasswordInput,
  } from "carbon-components-svelte";
  import { TextInput } from "carbon-components-svelte";
  let hidden = !$user_account.logged_in;

  let email = "";
  let password = "";
  let isAdmin = false;
  let isBanker = false;

  const on_login = () => {
    $user_account = {
      email: email,
      password: password,
    };

    console.log($user_account);

    if ((email = "admin@test.com" && password == "admin")) {
      $user_account.logged_in = true;
      $user_account.account_type = "admin";
    }

    if ((email = "banker@test.com" && password == "banker")) {
      alert("banker");
      $user_account.logged_in = true;
      $user_account.account_type = "banker";
    }

    if ($user_account.logged_in) {
      $user_account.logged_in = true;
      hidden = false;
    }
  };
</script>

{#key $user_account}
  {#if !$user_account.logged_in}
    <!-- Main modal -->
    <div
      class="container flex w-screen h-screen justify-center content-center fixed opacity-90 bg-black z-50 top-0 left-0"
    >
      <div class="container w-screen h-screen border border-red-500">
        <div
          class=" z-50 flex justify-center content-center items-center p-4 overflow-x-hidden overflow-y-auto h-screen w-screen"
        >
          <div class="relative w-full max-w-md max-h-full">
            <!-- Modal content -->
            <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
              <button
                type="button"
                class="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
                data-modal-hide="authentication-modal"
              >
                <svg
                  aria-hidden="true"
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
                <span class="sr-only">Close modal</span>
              </button>
              <div class="px-6 py-6 lg:px-8">
                <h3
                  class="mb-4 text-xl font-medium text-gray-900 dark:text-white"
                >
                  Sign in to our platform
                </h3>
                <form class="space-y-6" action="#">
                  <div>
                    <label
                      for="email"
                      class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >Your email</label
                    >
                    <input
                      type="email"
                      name="email"
                      bind:value={email}
                      id="email"
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                      placeholder="name@company.com"
                      required
                    />
                  </div>
                  <div>
                    <label
                      for="password"
                      class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >Your password</label
                    >
                    <input
                      bind:value={password}
                      type="password"
                      name="password"
                      id="password"
                      placeholder="••••••••"
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                      required
                    />
                  </div>
                  <div class="flex justify-between">
                    <div class="flex items-start">
                      <div class="flex items-center h-5">
                        <input
                          id="remember"
                          type="checkbox"
                          value=""
                          class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-600 dark:border-gray-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                          required
                        />
                      </div>
                      <label
                        for="remember"
                        class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                        >Remember me</label
                      >
                    </div>
                    <a
                      href=""
                      class="text-sm text-blue-700 hover:underline dark:text-blue-500"
                      >Lost Password?</a
                    >
                  </div>
                  <button
                    on:click={on_login}
                    class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >Login to your account</button
                  >
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  {/if}
{/key}
