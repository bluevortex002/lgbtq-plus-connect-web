import { For, type Component, createSignal } from 'solid-js';

import back from '../svg/back.svg';
import { Message, convsStore, convIdxSignal, userSignal } from '../context';
import { useNavigate } from '@solidjs/router';

const ChatDetailsPage: Component = () => {

	const [convIdx, setConvIdx] = convIdxSignal
	const [user, setUser] = userSignal
	const [convs, setConvs] = convsStore
	const navigate = useNavigate()

	if (user() === undefined) {
		navigate("/signup", { replace: true });
	}

	const colorList = [
		"chat-bubble chat-bubble-primary drop-shadow-md",
		"chat-bubble chat-bubble-secondary drop-shadow-md",
		"chat-bubble chat-bubble-accent drop-shadow-md",
		"chat-bubble chat-bubble-info drop-shadow-md",
		"chat-bubble chat-bubble-success drop-shadow-md",
		"chat-bubble chat-bubble-warning drop-shadow-md",
		"chat-bubble chat-bubble-error drop-shadow-md",
	]

	const [currInput, setCurrInput] = createSignal("")

	let msgBox: HTMLDivElement | undefined

	return (
		<div class="containern flex flex-col h-screen overflow-hidden">
			<nav class="drop-shadow-xl bg-white border-gray-200 dark:bg-gray-900">
				<div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
					<a class="flex items-center">
						<img src={back} class="h-8 mr-3" alt="Flowbite Logo"
							onClick={(ev) => navigate("/app/chat")}
						/>
						{/* <img src={currConv().user?.avatarUrl} class="h-12 mr-3 rounded-full" alt="Flowbite Logo" /> */}
						<span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">{convs[convIdx()].isForum ? convIdx.name : convs[convIdx()].user?.nickname}</span>
					</a>
				</div>
			</nav>

			<div ref={msgBox} class="container flex-1 px-1 overflow-y-scroll">
				<For each={convs[convIdx()].messages}>
					{
						(msg) => {

							return <div class={msg.sender.username === user()!.username ? "chat chat-end" : "chat chat-start"}>
								<div class="chat-image avatar">
									<div class="w-10 rounded-lg">
										<img src={msg.sender.avatarUrl} />
									</div>
									s</div>
								<div class="chat-header">
									{msg.sender.nickname}
									<time class="text-xs opacity-50 pl-1">{msg.time}</time>
								</div>
								<div class={colorList[Math.floor(Math.random() * colorList.length)]}>{msg.message}</div>
								<div class="chat-footer opacity-50">
									Delivered
								</div>
							</div>
						}
					}
				</For>
			</div>


			<div class="w-full bottom-0 left-0 z-50 h-16 flex flex-row items-center px-4 drop-shadow-md bg-white border-t border-gray-200 dark:bg-gray-700 dark:border-gray-600">
				<div>
					<button class="flex items-center justify-center text-gray-400 hover:text-gray-600">
						<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"></path>
						</svg>
					</button>
				</div>
				<div class="flex-grow ml-4">
					<div class="relative w-full">
						<input type="text" class="flex w-full border rounded-xl focus:outline-none focus:border-indigo-300 pl-4 h-10"
							value={currInput()}
							onChange={(ev) => setCurrInput(ev.currentTarget.value)}
						/>
						<button class="absolute flex items-center justify-center h-full w-12 right-0 top-0 text-gray-400 hover:text-gray-600">
							<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
							</svg>
						</button>
					</div>
				</div>
				<div class="ml-4">
					<button class="flex items-center justify-center bg-indigo-500 hover:bg-indigo-600 rounded-xl text-white px-4 py-1 flex-shrink-0"
						onClick={(ev) => {
							let newMsg: Message = {
								time: Date.now().toString(),
								sender: user()!,
								message: currInput(),
							}
							setConvs(convIdx(), "messages", convs[convIdx()].messages.length, newMsg)
							console.log(convIdx);

							setCurrInput("")

							msgBox!.scrollTop = msgBox?.scrollHeight!!
						}}
					>
						<span>Send</span>
						<span class="ml-2">
							<svg class="w-5 h-5 transform rotate-45 -mt-px" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
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