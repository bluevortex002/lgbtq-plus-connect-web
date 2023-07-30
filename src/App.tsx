import { createSignal, type Component } from 'solid-js';

import logo from './svg/logo.svg';
import chat from './svg/chat.svg';
import friends from './svg/friends.svg'
import styles from './App.module.css';
import { Outlet, useNavigate } from '@solidjs/router';
import { titleSignal, userSignal } from './context';



const App: Component = () => {

  const navigate = useNavigate();

  const [selectedPage, setSelectedPage] = createSignal<1 | 2 | 3 | 4>(1)
  const [title, setTitle] = titleSignal

  const [user, setUser] = userSignal

  if (user() === undefined) {
    console.log(user());

    navigate("/login", { replace: true });
  }
  console.log(user());

  return (
    <div class="container">
      <nav class="drop-shadow-xl bg-white border-gray-200 dark:bg-gray-900">
        <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a href="https://flowbite.com/" class="flex items-center">
            <img src={logo} class="h-12 mr-3" alt="Flowbite Logo" />
            <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              {title()}
            </span>
          </a>
          <button data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
            <span class="sr-only">Open main menu</span>
            <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
            </svg>
          </button>
          <div class="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <a href="#" class="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500" aria-current="page">Home</a>
              </li>
              <li>
                <a href="#" class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">About</a>
              </li>
              <li>
                <a href="#" class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Services</a>
              </li>
              <li>
                <a href="#" class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Pricing</a>
              </li>
              <li>
                <a href="#" class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <Outlet />

      <div class="fixed bottom-0 left-0 z-50 w-full h-16 bg-white border-t border-gray-200 dark:bg-gray-700 dark:border-gray-600">
        <div class="grid h-full max-w-lg grid-cols-4 mx-auto font-medium">
          <button type="button" class="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group"
            onclick={(ev) => {
              navigate("/app/chat")
              setTitle("Chat")
            }}
          >
            <svg class="w-7 h-7 mb-1 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
              <path d="M10.0007,0 C12.6497,0 15.1997,1.05 17.0697,2.93 C18.9497,4.811 20.0007,7.35 20.0007,10.01 C20.0007,13.51 18.1597,16.76 15.1597,18.57 C12.1597,20.38 8.4297,20.48 5.3307,18.83 L5.3307,18.83 L5.2997,18.83 C5.0007,18.71 4.7597,18.5 4.4797,18.36 C4.1707,18.23 3.8197,18.21 3.5007,18.311 C2.7597,18.57 2.0097,18.78 1.2397,18.96 C0.8397,18.97 0.7197,18.73 0.7197,18.34 C0.8997,17.55 1.1397,16.769 1.4207,16.01 C1.5297,15.68 1.5007,15.33 1.3307,15.019 L1.3307,15.019 L1.1307,14.63 C0.3897,13.22 0.0007,11.65 0.0007,10.061 L0.0007,10.061 L0.0007,10 C0.0007,7.35 1.0497,4.8 2.9297,2.93 C4.8097,1.05 7.3497,0 10.0007,0 Z M14.6097,8.73 C13.9097,8.73 13.3307,9.3 13.3307,10.01 C13.3307,10.71 13.9097,11.29 14.6097,11.29 C15.3197,11.29 15.8897,10.71 15.8897,10.01 C15.8897,9.3 15.3197,8.73 14.6097,8.73 Z M10.0007,8.73 C9.2907,8.73 8.7197,9.3 8.7197,10.01 C8.7197,10.71 9.2907,11.29 10.0007,11.29 C10.7107,11.29 11.2797,10.71 11.2797,10.01 C11.2797,9.3 10.7107,8.73 10.0007,8.73 Z M5.3897,8.73 C4.6797,8.73 4.1097,9.3 4.1097,10.01 C4.1097,10.71 4.6797,11.29 5.3897,11.29 C6.0897,11.29 6.6707,10.71 6.6707,10.01 C6.6707,9.3 6.0897,8.73 5.3897,8.73 Z" transform="translate(2 2)" class="color200E32 svgShape"></path>
            </svg>
            <span class="text-sm text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500">Chat</span>
          </button>
          <button type="button" class="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group"
            onclick={(ev) => {
              navigate("/app/contacts")
              setTitle("Contacts")
            }}
          >
            <svg class="w-7 h-7 mb-1 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 48 48">
              <circle cx="24" cy="15.8" r="7.9" class="color010101 svgShape"></circle>
              <path
                d="M30 27.9H18c-2.9 0-5.3 2.4-5.3 5.3v12.5c3.5 1.1 7.3 1.6 11.3 1.6 4 0 7.8-.6 11.3-1.6V33.2C35.3 30.3 32.9 27.9 30 27.9zM36.2.6c-3.6 0-6.7 2.5-7.6 5.8 3.5 1.7 5.9 5.3 5.9 9.4 0 .1 0 .3 0 .4.6.1 1.1.2 1.8.2 4.4 0 7.9-3.5 7.9-7.9S40.5.6 36.2.6z"
                class="color010101 svgShape"></path>
              <path
                d="M42.2 20.6h-8.9c-1.1 2.1-2.9 3.8-5.1 4.8H30c4.3 0 7.9 3.5 7.9 7.9v6.9c3.4-.1 6.6-.7 9.6-1.6V25.9C47.5 23 45.1 20.6 42.2 20.6zM13.6 16.2c0-.1 0-.3 0-.4 0-4.1 2.4-7.7 5.9-9.4-.9-3.4-4-5.8-7.6-5.8-4.4 0-7.9 3.5-7.9 7.9s3.5 7.9 7.9 7.9C12.4 16.4 13 16.3 13.6 16.2zM10.1 33.2c0-4.3 3.5-7.9 7.9-7.9h1.9c-2.2-1-4-2.7-5.1-4.8H5.8c-2.9 0-5.3 2.4-5.3 5.3v12.5c3 .9 6.3 1.5 9.6 1.6V33.2z"
                class="color010101 svgShape"></path>
            </svg>
            <span class="text-sm text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500">Contacts</span>
          </button>
          <button type="button" class="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group"
            onclick={(ev) => {
              navigate("/app/recommend")
              setTitle("Recommend")
            }}
          >
            <svg class="w-7 h-7 mb-1 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 128 128">
              <path d="M119.9 52.88a1.993 1.993 0 0 0-1.61-1.37l-5.18-.74-2.32-4.66a1.998 1.998 0 0 0-3.58 0l-2.32 4.66-5.18.74a2.006 2.006 0 0 0-1.1 3.42l3.74 3.62-.88 5.11a1.991 1.991 0 0 0 2.89 2.11l4.64-2.42 4.64 2.42a1.993 1.993 0 0 0 2.1-.15 1.994 1.994 0 0 0 .79-1.96l-.88-5.11 3.74-3.62a1.983 1.983 0 0 0 .51-2.05zm-7.79 3.53a2.001 2.001 0 0 0-.58 1.78l.37 2.17-1.97-1.04a2.075 2.075 0 0 0-1.86 0l-1.97 1.04.37-2.17a2.001 2.001 0 0 0-.58-1.78l-1.57-1.52 2.18-.31a2.04 2.04 0 0 0 1.51-1.09l.99-2 .99 2a2.04 2.04 0 0 0 1.5 1.09l2.19.31zM51.99 91.07A6.37 6.37 0 0 0 53 87.62a5.975 5.975 0 0 0-6.23-5.98h-6.29a14.928 14.928 0 0 0 .38-3.55c-.22-2.23-.74-7.45-4.75-9.4a6.238 6.238 0 0 0-6.31.4q-.36.255-.69.54c-2.39 2.12-2.26 4.97-2.19 6.5.01.22.02 1.69.02 1.69-.47 1.22-2.29 4.39-3.1 5.81h-1.88A1.988 1.988 0 0 0 20 82H10a2.006 2.006 0 0 0-2 2v22a2.006 2.006 0 0 0 2 2h10a1.995 1.995 0 0 0 1.84-1.23c.26 0 2.72-.03 2.83-.03a8.129 8.129 0 0 0 2.2 1.09 3.974 3.974 0 0 0 1.14.16l15.45.01a6.302 6.302 0 0 0 6.23-6.35q0-.33-.03-.66a6.42 6.42 0 0 0 1.41-4.02 6.234 6.234 0 0 0-.09-1.06 6.375 6.375 0 0 0 1.13-3.63 6.054 6.054 0 0 0-.12-1.21zm-5.12-1.11c-.13.01-.21.11-.04.21a2.387 2.387 0 0 1 1.28 2.11 2.294 2.294 0 0 1-2.24 2.35s-.32.1-.05.23a2.357 2.357 0 0 1 1.25 2.11 2.29 2.29 0 0 1-2.23 2.34h-.21c-.09 0-.19.03-.2.13a.142.142 0 0 0 .07.14 2.425 2.425 0 0 1 1.19 2.07 2.292 2.292 0 0 1-2.23 2.35l-15.45-.01c-.78-.23-1.36-.84-2.1-1.13a6.78 6.78 0 0 0-1.67-.12c-.67 0-1.45.02-2.24.03V87.63l3.33-.01h.01a1.476 1.476 0 0 0 1.22-.7c1.14-2.01 4.38-7.43 4.38-8.65v-1.48c0-1.46-.36-3.12.82-4.16a2.314 2.314 0 0 1 1.39-.63h.11a2.492 2.492 0 0 1 1.1.28c1.9.93 2.33 4.28 2.52 6.2a35.382 35.382 0 0 1-1.24 6.19c-.27.95 1.05.96 1.05.96l10.08.01A1.998 1.998 0 0 1 49 87.62a2.3 2.3 0 0 1-2.13 2.34z" ></path><path d="M112.74 69.7h-.01a5.888 5.888 0 0 1-.95-.38L109 67.86l-2.79 1.46a6.064 6.064 0 0 1-2.77.68 6.004 6.004 0 0 1-5.91-7.02l.52-3.03-2.22-2.15a6.025 6.025 0 0 1-1.54-6.15 5.566 5.566 0 0 1 .53-1.16 22.204 22.204 0 0 0-4.64-.49h-4.03a8.821 8.821 0 0 1-.87-6.52A20.332 20.332 0 0 0 91 29.38V12.39A12.532 12.532 0 0 0 78.36 0H61.64A12.553 12.553 0 0 0 49 12.43v16.95a20.324 20.324 0 0 0 5.71 14.09 8.836 8.836 0 0 1-.86 6.53h-4.03a22.879 22.879 0 0 0-21.44 15.29 10.07 10.07 0 0 1 4.89-1.27 10.587 10.587 0 0 1 4.6 1.07c4.05 1.98 5.68 5.81 6.4 8.91h65.47a10.454 10.454 0 0 1 3.26.53v-1.29a24.383 24.383 0 0 0-.26-3.54zM81.82 50.68 70 64.2 58.18 50.68c-.05-.05-.11-.1-.17-.15a12.641 12.641 0 0 0 .9-3.67 21.136 21.136 0 0 0 22.17 0 12.992 12.992 0 0 0 .91 3.67c-.06.05-.12.1-.17.15zm32.84 29.68a6.248 6.248 0 0 0-4.92-2.36H49.5a9.892 9.892 0 0 1 7.5 9.62 10.444 10.444 0 0 1-.9 4.24c0 .14.01.28.01.42a10.428 10.428 0 0 1-1.04 4.55v.14a10.486 10.486 0 0 1-1.39 5.2A10.296 10.296 0 0 1 43.46 112l-10.09-.01v.01h-3.81l2.29 11.19a6.208 6.208 0 0 0 6.1 4.81h64.09a6.223 6.223 0 0 0 6.12-4.86l7.68-37.6a6.084 6.084 0 0 0-1.18-5.18zM70 108a5 5 0 1 1 5-5 5.002 5.002 0 0 1-5 5z" ></path></svg>
            <span class="text-sm text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500">Recommend</span>
          </button>
          <button type="button" class="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group"
            onclick={(ev) => {
              navigate("/app/settings")
              setTitle("Settings")
            }}
          >
            <svg class="w-7 h-7 mb-1 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
            </svg>
            <span class="text-sm text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500">Settings</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
