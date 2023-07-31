import { Component, For, createSignal } from "solid-js";
import { convIdxSignal, convsStore, forumStore, userSignal } from "../context";
import { useNavigate } from "@solidjs/router";


const SearchPage: Component = () => {

	const [user, setUser] = userSignal

	const [forums, setForums] = forumStore

	const [searchedForum, setSearchedForum] = createSignal(forums)

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
					placeholder="Search users or forum" required
					onInput={(ev) => {
						const word = ev.currentTarget.value.toLowerCase()
						console.log("word", word);
						if (word.length === 0) {
							setSearchedForum(forums)
						} else {
							const result = forums.filter((forum) => forum.name.toLocaleLowerCase().indexOf(word) > 0 || forum.desc.toLowerCase().indexOf(word) > 0)
							setSearchedForum(result)
						}
					}}
				/>
			</div>
		</div>
		<div class="flex flex-col">
			<For each={searchedForum()}>
				{(forum) => <div class="flex flex-row justify-start my-2 gap-2 bg-white shadow-md"
					onclick={(ev) => {
						let existingConv = convs.filter((conv) => conv.forum?.name === forum.name)
						if (existingConv.length === 0) {
							let idx = convs.length
							setConvs(idx, {
								forum,
								messages: [],
								lastTime: "just now"
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
							<img src={forum.pic} />
						</div>
					</div>
					<div class="flex flex-col justify-start pl-5 gap-1 flex-1">
						<span>{forum.name}</span>
						<span>Member count: {forum.members.length}</span>
						<div class="flex flex-row gap-1">
							<For each={forum.members}>
								{(member) => <img class="h-10 rounded-md" src={member.avatarUrl} />}
							</For>
						</div>
					</div>
					<div class="text-sm w-[7rem] h-[7rem] p-1 break-word text-ellipsis bg-slate-100">
						{forum.desc}
					</div>
				</div>}
			</For>
		</div>

	</div>
}

export default SearchPage