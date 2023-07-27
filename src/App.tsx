import { createSignal, type Component } from 'solid-js';

import logo from './svg/logo.svg';
import chat from './svg/chat.svg';
import friends from './svg/friends.svg'
import styles from './App.module.css';
import { Outlet, useNavigate } from '@solidjs/router';
import { userSignal } from './context';

const App: Component = () => {

  const navigate = useNavigate();

  const [selectedPage, setSelectedPage] = createSignal<1 | 2 | 3 | 4>(1)

  const [user, setUser] = userSignal

  if (user() === undefined) {
    console.log(user());

    navigate("/login", { replace: true });
  }
  console.log(user());

  return (
    <div class="container">
      <nav class="bg-white border-gray-200 dark:bg-gray-900">
        <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a href="https://flowbite.com/" class="flex items-center">
            <img src={logo} class="h-12 mr-3" alt="Flowbite Logo" />
            <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">LGBTQ+Connect</span>
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
            onclick={(ev) => navigate("/app/chat")}
          >
            <svg class="w-7 h-7 mb-1 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
              <path
                d="M8,11a1,1,0,1,0,1,1A1,1,0,0,0,8,11Zm4,0a1,1,0,1,0,1,1A1,1,0,0,0,12,11Zm4,0a1,1,0,1,0,1,1A1,1,0,0,0,16,11ZM12,2A10,10,0,0,0,2,12a9.89,9.89,0,0,0,2.26,6.33l-2,2a1,1,0,0,0-.21,1.09A1,1,0,0,0,3,22h9A10,10,0,0,0,12,2Zm0,18H5.41l.93-.93a1,1,0,0,0,.3-.71,1,1,0,0,0-.3-.7A8,8,0,1,1,12,20Z">
              </path>
            </svg>
            <span class="text-sm text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500">Chat</span>
          </button>
          <button type="button" class="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group"
            onclick={(ev) => navigate("/app/contacts")}
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
          <button type="button" class="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group">
            <svg class="w-7 h-7 mb-1 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 64 64">
              <path d="M13.3 49.72A4.92 4.92 0 0 0 15 46a5 5 0 0 0-10 0 4.92 4.92 0 0 0 1.7 3.72A8 8 0 0 0 2 57v4a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-4a8 8 0 0 0-4.7-7.28zM10 43a3 3 0 1 1-3 3 3 3 0 0 1 3-3zm6 17H4v-3a6 6 0 0 1 12 0zM57.3 49.72A4.92 4.92 0 0 0 59 46a5 5 0 0 0-10 0 4.92 4.92 0 0 0 1.7 3.72A8 8 0 0 0 46 57v4a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-4a8 8 0 0 0-4.7-7.28zM54 43a3 3 0 1 1-3 3 3 3 0 0 1 3-3zm6 17H48v-3a6 6 0 0 1 12 0zM36 2c-14.34 0-26 9.14-26 20.38 0 5.92 3.25 11.51 8.92 15.38a10.42 10.42 0 0 1-1 1.78c-.82 1.3-1.52 2.42-1.21 3.4a1.52 1.52 0 0 0 .89 1 1.71 1.71 0 0 0 .64.11 20.46 20.46 0 0 0 4.86-1.31 31.55 31.55 0 0 1 3.9-1.22 32.28 32.28 0 0 0 9 1.24c14.34 0 26-9.14 26-20.38S50.34 2 36 2zm0 38.76a30.57 30.57 0 0 1-8.42-1.16c-.74-.22-2 .16-5.09 1.19-1.14.38-2.72.91-3.63 1.12.21-.41.54-.94.77-1.3.94-1.5 2.12-3.37.62-4.37C15 32.74 12 27.69 12 22.38 12 12.25 22.77 4 36 4s24 8.25 24 18.38-10.77 18.38-24 18.38z"></path>
              <path d="M52 16H42V9.5a3.5 3.5 0 0 0-7 0V16H22a1 1 0 0 0-1 1v17a1 1 0 0 0 1 1h26.5a3.5 3.5 0 0 0 3.5-3.5 3.42 3.42 0 0 0-.09-.79A3.52 3.52 0 0 0 54 27.5a3.41 3.41 0 0 0-.3-1.42A3.35 3.35 0 0 0 55 23.5a3.06 3.06 0 0 0-.33-1.39A3.32 3.32 0 0 0 56 19.5a3.78 3.78 0 0 0-4-3.5zM31 33h-8V18h8zm4 0h-2V18h2zm17.85-12.15a1 1 0 0 0-.33 1.69 1.31 1.31 0 0 1 .48 1 1.54 1.54 0 0 1-1.09 1.32 1 1 0 0 0-.34 1.63A1.48 1.48 0 0 1 52 27.5a1.5 1.5 0 0 1-1.51 1.5 1 1 0 0 0-.8 1.6 1.52 1.52 0 0 1 .31.9 1.5 1.5 0 0 1-1.5 1.5H37V9.5a1.5 1.5 0 0 1 3 0V17a1 1 0 0 0 1 1h11c1.08 0 2 .69 2 1.5a1.55 1.55 0 0 1-1.15 1.35z" ></path>
            </svg>
            <span class="text-sm text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500">Recommend</span>
          </button>
          <button type="button" class="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group">
            <svg class="w-7 h-7 mb-1 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
            </svg>
            <span class="text-sm text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500">Profile</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
