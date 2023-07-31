import { Component, For, Show } from "solid-js";
import { convIdxSignal, convsStore, friendsStore } from "../context";
import { useNavigate } from "@solidjs/router";


const ContactsPage: Component = () => {
	const [friends, setFriends] = friendsStore

	const navigate = useNavigate()
	const [convs, setConvs] = convsStore
	const [convIdx, setConvIdx] = convIdxSignal

	return <div class="container">
		<div class="mx-3 my-3">
			<div class="relative text-gray-600">
				<span class="absolute inset-y-0 left-0 flex items-center pl-2">
					<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
						viewBox="0 0 24 24" class="w-6 h-6 text-gray-300">
						<path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
					</svg>
				</span>
				<input type="search" class="block w-full py-2 pl-10 bg-gray-100 rounded outline-none" name="search"
					placeholder="Search firends or liked users" required />
			</div>
		</div>
		<div class="flex flex-col">
			<For each={friends}>
				{(usr) => <div class="flex flex-row justify-start my-2 bg-white shadow-md"
					onclick={(ev) => {
						let existingConv = convs.filter((conv) => !conv.isForum && conv.user?.userId === usr.userId)
						if (existingConv.length === 0) {
							let idx = convs.length
							setConvs(idx, {
								isForum: false,
								name: usr.nickname,
								user: usr,
								messages: [],
								lastTime: ""
							})
							setConvIdx(idx)
						} else {
							setConvIdx(convs.indexOf(existingConv[0]))
						}

						navigate("/chat-details")
					}}
				>
					<div class="avatar m-1">
						<div class="w-24 rounded">
							<img src={usr.avatarUrl} />
						</div>
					</div>
					<div class="flex flex-col flex-1 justify-start pl-5">
						<span>{usr.nickname}</span>
						<span>Bio: {usr.selfBioSex}</span>
						<span>Psy: {usr.selfPsySex}</span>
					</div>
					<div class="pl-5">
						<Show when={usr.like}>
							<svg class="w-9 h-9 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="#f05542">
								<path d="M5.301 3.002c-.889-.047-1.759.247-2.404.893-1.29 1.292-1.175 3.49.26 4.926l.515.515L8.332 14l4.659-4.664.515-.515c1.435-1.437 1.55-3.634.26-4.926-1.29-1.292-3.483-1.175-4.918.262l-.516.517-.517-.517C7.098 3.438 6.19 3.049 5.3 3.002z"></path></svg>
						</Show>
					</div>
				</div>}
			</For>
		</div>

	</div>
}

export default ContactsPage