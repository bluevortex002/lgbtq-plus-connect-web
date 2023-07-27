import type { Component } from 'solid-js';

import back from '../svg/back.svg';

const ChatDetailsPage: Component = () => {
	return (
		<div class="container">
			<nav class="bg-white border-gray-200 dark:bg-gray-900">
				<div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
					<a href="https://flowbite.com/" class="flex items-center">
						<img src={back} class="h-8 mr-3" alt="Flowbite Logo" />
						<img src="https://flowbite.com/docs/images/logo.svg" class="h-8 mr-3" alt="Flowbite Logo" />
						<span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Mike</span>
					</a>
				</div>
			</nav>

			<div>
				<div class="chat chat-start">
					<div class="chat-bubble chat-bubble-primary">What kind of nonsense is this</div>
				</div>
				<div class="chat chat-start">
					<div class="chat-bubble chat-bubble-secondary">Put me on the Council and not make me a Master!??</div>
				</div>
				<div class="chat chat-start">
					<div class="chat-bubble chat-bubble-accent">That's never been done in the history of the Jedi. It's insulting!</div>
				</div>
				<div class="chat chat-end">
					<div class="chat-bubble chat-bubble-info">Calm down, Anakin.</div>
				</div>
				<div class="chat chat-end">
					<div class="chat-bubble chat-bubble-success">You have been given a great honor.</div>
				</div>
				<div class="chat chat-end">
					<div class="chat-bubble chat-bubble-warning">To be on the Council at your age.</div>
				</div>
				<div class="chat chat-end">
					<div class="chat-bubble chat-bubble-error">It's never happened before.</div>
				</div>
			</div>

			<div class="fixed bottom-0 left-0 z-50 w-full h-16 flex flex-row items-center rounded-xl px-4 bg-white border-t border-gray-200 dark:bg-gray-700 dark:border-gray-600">
				<div>
					<button class="flex items-center justify-center text-gray-400 hover:text-gray-600">
						<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"></path>
						</svg>
					</button>
				</div>
				<div class="flex-grow ml-4">
					<div class="relative w-full">
						<input type="text" class="flex w-full border rounded-xl focus:outline-none focus:border-indigo-300 pl-4 h-10" />
						<button class="absolute flex items-center justify-center h-full w-12 right-0 top-0 text-gray-400 hover:text-gray-600">
							<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
							</svg>
						</button>
					</div>
				</div>
				<div class="ml-4">
					<button class="flex items-center justify-center bg-indigo-500 hover:bg-indigo-600 rounded-xl text-white px-4 py-1 flex-shrink-0">
						<span>Send</span>
						<span class="ml-2">
							<svg class="w-4 h-4 transform rotate-45 -mt-px" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path>
							</svg>
						</span>
					</button>
				</div>
			</div>


		</div>

	)
}

export default ChatDetailsPage;