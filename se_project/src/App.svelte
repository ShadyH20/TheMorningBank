<script>
  import "carbon-components-svelte/css/white.css";
  import CardRelpacement from "./pages/CardRelpacement.svelte";
  import CreditCardReq from "./pages/CreditCardReq.svelte";
  import Loans from "./pages/Loans.svelte";
  import NewBankAccount from "./pages/NewBankAccount.svelte";
  import { Router, Link, Route } from "svelte-navigator";
  import NavbarButton from "./lib/NavbarButton.svelte";
  import { user_account } from "./lib/stores";
  import Login from "./pages/Login.svelte";
  import Account from "svelte-material-icons/Account.svelte";
  import { Search } from "carbon-components-svelte";
  import { fade, fly } from "svelte/transition";
  import TechnicalIssues from "./pages/TechnicalIssues.svelte";
  import HomeAdmin from "./pages/HomeAdmin.svelte";

  let expanded = false;

  let new_bank_account_modal = false;
  $: console.log($user_account);
  </script>

<div class="page w-screen h-screen top-0 left-0 p-0 m-0 absolute">
  <Login />

  {#key $user_account}
    {#if $user_account.logged_in}
      <Router>
        <nav class="bg-white border-gray-200">
          <div
            class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 z-0"
          >
            <a class="flex items-center">
              <img
                src="https://flowbite.com/docs/images/logo.svg"
                class="h-8 mr-3"
                alt="Logo"
              />
              <span
                class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white"
                >XBank</span
              >
            </a>
            <div class="flex md:order-2">
              <button
                type="button"
                data-collapse-toggle="navbar-search"
                aria-controls="navbar-search"
                aria-expanded="false"
                class="md:hidden text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 mr-1"
              >
                <svg
                  class="w-5 h-5"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                  ><path
                    fill-rule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    clip-rule="evenodd"
                  /></svg
                >
                <span class="sr-only">Search</span>
              </button>
              <div class="relative hidden md:block">
                <div
                  class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"
                >
                  <svg
                    class="w-5 h-5 text-gray-500"
                    aria-hidden="true"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                    ><path
                      fill-rule="evenodd"
                      d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                      clip-rule="evenodd"
                    /></svg
                  >
                  <span class="sr-only">Search icon</span>
                </div>
                <input
                  type="text"
                  id="search-navbar"
                  class="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Search..."
                />
              </div>
              <button
                data-collapse-toggle="navbar-search"
                type="button"
                class="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                aria-controls="navbar-search"
                aria-expanded="false"
              >
                <span class="sr-only">Open menu</span>
                <svg
                  class="w-6 h-6"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                  ><path
                    fill-rule="evenodd"
                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                    clip-rule="evenodd"
                  /></svg
                >
              </button>
            </div>
            <div
              class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
              id="navbar-search"
            >
              <div class="relative mt-3 md:hidden">
                <div
                  class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"
                >
                  <svg
                    class="w-5 h-5 text-gray-500"
                    aria-hidden="true"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                    ><path
                      fill-rule="evenodd"
                      d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                      clip-rule="evenodd"
                    /></svg
                  >
                </div>
                <input
                  type="text"
                  id="search-navbar"
                  class="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Search..."
                />
              </div>
              <ul
                class="flex flex-row justify-center content-center p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700"
              >
                {#if $user_account.account_type == "banker"}
                  <li class="my-auto">
                    <NavbarButton to="/" name="Credit Card Requests" />
                  </li>
                  <li class="my-auto">
                    <NavbarButton to="/replacements" name="Card Replacements" />
                  </li>
                  <li class="my-auto">
                    <NavbarButton to="/loans" name="Loans" />
                  </li>
                  <li>
                    <button
                      class="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                      on:click={() => {
                        new_bank_account_modal = true;
                      }}
                    >
                      New Bank Account
                    </button>
                  </li>
                {:else}
                  <li class="my-auto">
                    <NavbarButton to="/admin" name="Home" />
                  </li>
                  <li class="my-auto">
                    <NavbarButton to="/issues" name="Issues" />
                  </li>
                {/if}
                <!-- Modal toggle -->
              </ul>
            </div>
          </div>
        </nav>

        <div class="page flex">
          <Route path="/" component={CreditCardReq} />
          <Route path="/replacements" component={CardRelpacement} />
          <Route path="/loans" component={Loans} />
          <Route path="/newAccount" component={NewBankAccount} />
          <Route path="/issues" component={TechnicalIssues} />
          <Route path="/admin" component={HomeAdmin} />
        </div>
      </Router>
    {/if}
  {/key}
</div>

<!-- Main modal -->

{#key new_bank_account_modal}
  <div
    class="container w-screen {new_bank_account_modal
      ? ''
      : 'hidden'} h-screen fixed top-0 z-50 left-0 flex justify-center content-center items-center"
  >
    <div
      class="overlay w-screen {new_bank_account_modal
        ? ''
        : 'hidden'} h-screen fixed bg-black left-0 top-0 z-50 flex justify-center content-center items-center opacity-70"
      in:fade={{ duration: 200 }}
      out:fade={{ duration: 200 }}
    />
    <div
      class="z-50 p-4 w-screen mx-auto justify-center content-center flex transform overflow-x-hidden overflow-y-auto opacity-100"
      in:fly={{ y: 200, duration: 200 }}
      out:fly={{ y: -200, duration: 200 }}
    >
      <div class="relative w-full max-w-2xl max-h-full opacity-100">
        <!-- Modal content -->
        <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
          <button
            on:click={() => {
              new_bank_account_modal = false;
            }}
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
            <h3 class="mb-4 text-xl font-medium text-gray-900 dark:text-white">
              Create a new bank account
            </h3>
            <form class="space-y-6" action="#">
              <div>
                <label
                  for="email"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >Email</label
                >
                <input
                  type="email"
                  name="email"
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
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                  required
                />
              </div>
              <button
                type="submit"
                class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >Create account</button
              >
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
{/key}

<style>
  .page {
    background-color: #fdf6ff;
  }
</style>
