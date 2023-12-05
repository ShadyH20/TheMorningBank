<script>
    import Cash from "svelte-material-icons/Cash.svelte"
    import CellPhoneArrowDown from "svelte-material-icons/CellPhoneArrowDown.svelte"
    import FilePdfBox from "svelte-material-icons/FilePdfBox.svelte"
</script>

<div class="page flex flex-col">
  <h1 class="font-extrabold ml-10 mt-10 text-3xl text-left">
    Bank Announcements
  </h1>

  <div class="flex text-left mx-20 mt-12">
    <ol class="relative border-l border-gray-200 dark:border-gray-700">
      <li class="mb-10 ml-6">
        <span
          class="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900"
        >
          <FilePdfBox />
        </span>
        <h3
          class="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white"
        >
          Please read the following pdf on new workplace regulations<span
            class="bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300 ml-3"
            >Latest</span
          >
        </h3>
        <time
          class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500"
          >1 hour ago</time
        >
        <p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
            Please read the following pdf on new workplace regulations. This is
            very important and will affect all employees. Please read the
            following pdf on new workplace regulations. This is very important and
            will affect all employees.
        </p>
        <a
          href="#"
          class="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700"
          ><svg
            class="w-4 h-4 mr-2"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
            ><path
              fill-rule="evenodd"
              d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v3.586l-1.293-1.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V8z"
              clip-rule="evenodd"
            /></svg
          > Download PDF</a
        >
      </li>
      <li class="mb-10 ml-6">
        <span
          class="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900"
        >
          <CellPhoneArrowDown />
        </span>
        <h3 class="mb-1 text-lg font-semibold text-gray-900 dark:text-white">
          New account types are being added to the system.
        </h3>
        <time
          class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500"
          >4 days ago</time
        >
        <p class="text-base font-normal text-gray-500 dark:text-gray-400">
            We are happy to announce that we are adding new account types to the
            system. This will allow us to serve more customers and provide more
            services.
        </p>
      </li>
      <li class="ml-6">
        <span
          class="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900"
        >
          <Cash />
        </span>
        <h3 class="mb-1 text-lg font-semibold text-gray-900 dark:text-white">
            10% raise to all bankers
        </h3>
        <time
          class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500"
          >5 days ago</time
        >
        <p class="text-base font-normal text-gray-500 dark:text-gray-400">
            We are happy to announce that all bankers will receive a 10% raise
            starting next month. This is a result of our recent success and
            growth.
        </p>
      </li>
    </ol>
  </div>
</div>
