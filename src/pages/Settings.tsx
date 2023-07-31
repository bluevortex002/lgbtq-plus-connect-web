import { Component } from "solid-js";
import { userSignal } from "../context";


const SettingsPage: Component = () => {

	const [user, setUser] = userSignal

	return <div class="container flex flex-col w-full justify-center">
		<div class="avatar flex justify-center items-center mt-20 mx-20 mb-10">
			<div class="w-64 rounded-full">
				<img src={user().avatarUrl} />
			</div>
		</div>
		<span class="text-center text-xl">{user().nickname}</span>
		<div class="grid grid-cols-2 px-2 gap-2">
			<span class="text-center h-10 shadow-md rounded-md bg-gray-100 hover:bg-white">Self Bio Sex: {user().selfBioSex}</span>
			<span class="text-center h-10 shadow-md rounded-md bg-gray-100 hover:bg-white">Self Bio Sex: {user().selfPsySex}</span>
			<span class="text-center h-10 shadow-md rounded-md bg-gray-100 hover:bg-white">Friend Bio Sex: {user().friendBioSex}</span>
			<span class="text-center h-10 shadow-md rounded-md bg-gray-100 hover:bg-white">Friend Psy Sex: {user().friendPsySex}</span>
			<button class="h-[8rem] rounded-2xl bg-blue-400 text-white shadow-md hover:bg-blue-300">Download key pair</button>
			<button class="h-[8rem] rounded-2xl bg-blue-400 text-white shadow-md hover:bg-blue-300">Download chat history</button>
		</div>
		<div class="grid grid-cols-1 mt-5 gap-y-3">
			<div class="flex flex-row justify-around">
				<label>Allow upload your location</label>
				<input type="checkbox" class="toggle" checked />
			</div>
		</div>
	</div>
}

export default SettingsPage