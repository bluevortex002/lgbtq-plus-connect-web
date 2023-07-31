import { Component, createSignal } from "solid-js"
import { SexOptions, User, jinhui, userSignal } from "../context"
import { useNavigate } from "@solidjs/router";
import * as Api from "../api";

const SignUpPage: Component = () => {

	const [user, setUser] = userSignal

	const navigate = useNavigate();

	const [userToSign, setUserToSign] = createSignal<User>({})

	return <div class="min-h-screen flex flex-col items-center justify-center bg-gray-300">
		<div class="flex flex-col bg-white shadow-md px-4 sm:px-6 md:px-8 lg:px-10 py-8 rounded-md w-full max-w-md">
			<div class="font-medium self-center text-xl sm:text-2xl uppercase text-gray-800">
				Signup To LGBTQ+Connect</div>
			<div class="relative mt-10 h-px bg-gray-300">
				<div class="absolute left-0 top-0 flex justify-center w-full -mt-2">
					<span class="bg-white px-4 text-xs text-gray-500 uppercase">all fields are required</span>
				</div>
			</div>
			<div class="mt-10">
				<form action="#">
					<div class="flex flex-col mb-6">
						<label for="username" class="mb-1 text-xs sm:text-sm tracking-wide text-gray-600">Username:</label>
						<div class="relative">
							<div class="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400">
								<svg class="h-6 w-6" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="5" viewBox="0 0 128 128" stroke="currentColor">
									<path d="M110,9H18A18,18,0,0,0,0,27v74a18,18,0,0,0,18,18h92a18,18,0,0,0,18-18V27A18,18,0,0,0,110,9Zm14,92a14,14,0,0,1-14,14H18A14,14,0,0,1,4,101V27A14,14,0,0,1,18,13h92a14,14,0,0,1,14,14Z" class="color000 svgShape"></path><path d="M108,19H20A10,10,0,0,0,10,29V99a10,10,0,0,0,10,10h88a10,10,0,0,0,10-10V29A10,10,0,0,0,108,19ZM92,105H38V85.26c.58-7.79,11-10.16,12.92-10.54A15.55,15.55,0,0,0,64.31,82.5h1.36a15.33,15.33,0,0,0,11.19-4.86,16.51,16.51,0,0,0,2.2-2.92c1.8.34,12.35,2.7,12.93,10.54ZM57.93,69.25a12.21,12.21,0,0,0,14.14,0,9.85,9.85,0,0,0,3.21,4A12.54,12.54,0,0,1,74,74.89a11.37,11.37,0,0,1-8.29,3.61H64.31a11.54,11.54,0,0,1-9.61-5.25A9.84,9.84,0,0,0,57.93,69.25ZM51,48.7c0-7.28,6.28-13.2,14-13.2s14,5.92,14,13.2S72.59,67.5,65,67.5,51,56,51,48.7ZM114,99a6,6,0,0,1-6,6H96V85.19s0-.09,0-.13C95.2,73.27,80.05,70.82,79.45,70.73a5.45,5.45,0,0,1-4.14-4.18C80,61.7,83,54.27,83,48.7c0-9.48-8.08-17.2-18-17.2S47,39.22,47,48.7c0,5.57,3,13,7.69,17.85-.43,1.46-1.5,3.73-4.1,4.18-.64.1-15.79,2.55-16.58,14.34,0,0,0,.09,0,.13V105H20a6,6,0,0,1-6-6V29a6,6,0,0,1,6-6h88a6,6,0,0,1,6,6Z" ></path><path d="M84,89H76a2,2,0,0,0,0,4h8a2,2,0,0,0,0-4Z" ></path>
								</svg>
							</div>

							<input type="text" name="username" class="text-sm sm:text-base placeholder-gray-500 pl-10 pr-4 rounded-lg border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400" placeholder="create an unique username"
								onChange={(event) => setUserToSign((user) => { user.username = event.currentTarget.value; return user; })}
							/>
						</div>
					</div>

					<div class="flex flex-col mb-6">
						<label for="nickname" class="mb-1 text-xs sm:text-sm tracking-wide text-gray-600">Nickname:</label>
						<div class="relative">
							<div class="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400">
								<svg class="h-6 w-6" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
									<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
									<circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
									<path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
								</svg>
							</div>

							<input id="nickname" type="text" name="nickname" class="text-sm sm:text-base placeholder-gray-500 pl-10 pr-4 rounded-lg border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400" placeholder="Your nickname"
								onChange={(event) => setUserToSign((user) => { user.nickname = event.currentTarget.value; return user; })}
							/>
						</div>
					</div>
					<div class="flex flex-col mb-6">
						<label for="selfBioSex" class="mb-1 text-xs sm:text-sm tracking-wide text-gray-600">What's your biological gender:</label>
						<div class="relative">
							<select id="selfBioSex" name="selfBioSex" class="apperence-none bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
								onChange={(event) => setUserToSign((user) => { user.selfBioSex = event.currentTarget.value as SexOptions; return user; })}
							>
								<option selected>Choose one option</option>
								<option value="MALE">male</option>
								<option value="FEMALE">female</option>
								<option value="BOTH">both</option>
							</select>
						</div>
					</div>
					<div class="flex flex-col mb-6">
						<label for="selfPsySex" class="mb-1 text-xs sm:text-sm tracking-wide text-gray-600">What's your psychological gender:</label>
						<div class="relative">
							<select id="selfPsySex" name="selfPsySex" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
								onChange={(event) => setUserToSign((user) => { user.selfPsySex = event.currentTarget.value as SexOptions; return user; })}
							>
								<option selected>Choose one option</option>
								<option value="MALE">male</option>
								<option value="FEMALE">female</option>
								<option value="BOTH">both</option>
							</select>
						</div>
					</div>
					<div class="flex flex-col mb-6">
						<label for="recommendBioSex" class="mb-1 text-xs sm:text-sm tracking-wide text-gray-600">What is the biological sex of the person you would like us to recommend to you:</label>
						<div class="relative">
							<select id="recommendBioSex" name="recommendBioSex" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
								onChange={(event) => setUserToSign((user) => { user.friendBioSex = event.currentTarget.value as SexOptions; return user; })}
							>
								<option selected>Choose one option</option>
								<option value="MALE">male</option>
								<option value="FEMALE">female</option>
								<option value="BOTH">both</option>
							</select>
						</div>
					</div>
					<div class="flex flex-col mb-6">
						<label for="recommendPsySex" class="mb-1 text-xs sm:text-sm tracking-wide text-gray-600">What is the psychological sex of the person you would like us to recommend to you:</label>
						<div class="relative">
							<select id="recommendPsySex" name="recommendPsySex" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
								onChange={(event) => setUserToSign((user) => {
									user.friendPsySex = event.currentTarget.value as SexOptions; return user;
								})}
							>
								<option selected>Choose one option</option>
								<option value="MALE">male</option>
								<option value="FEMALE">female</option>
								<option value="BOTH">both</option>
							</select>
						</div>
					</div>

					<div class="flex w-full">
						<button type="submit" class="flex items-center justify-center focus:outline-none text-white text-sm sm:text-base bg-blue-600 hover:bg-blue-700 rounded py-2 w-full transition duration-150 ease-in"
							onClick={(event) => {
								(async function () {
									// await Api.signUp("8888888888888888888888", userToSign().username!, userToSign().nickname!, userToSign().selfBioSex!, userToSign().selfPsySex!, userToSign().friendBioSex!, userToSign().friendPsySex!)
									// pretent that always success
									// console.log(`current user is ${JSON.stringify(userToSign())}`);
									// let resp = await Api.login("8888888888888888888888", userToSign().username!)
									// console.log("response = ", resp);

									// setUserToSign((user) => { user.userId = resp.id; return user })
									// console.log("user to sign", userToSign());

									setUser(jinhui)
									// console.log("response userId = ", resp.id);

									// console.log("current user is", user());
									navigate("/app/chat");
								})();
							}}
						>
							<span class="mr-2 uppercase">Sign up</span>
							<span>
								<svg class="h-6 w-6" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
									<path d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
								</svg>
							</span>
						</button>
					</div>
				</form>
			</div>
		</div>
	</div>
}

export default SignUpPage