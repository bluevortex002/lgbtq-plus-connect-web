import { Component, createSignal } from "solid-js"
import { User, userSignal } from "../context"

const SignUpPage: Component = () => {

	const [user, setUser] = userSignal

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
						<label for="email" class="mb-1 text-xs sm:text-sm tracking-wide text-gray-600">E-Mail Address:</label>
						<div class="relative">
							<div class="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400">
								<svg class="h-6 w-6" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
									<path d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
								</svg>
							</div>

							<input id="email" type="email" name="email" class="text-sm sm:text-base placeholder-gray-500 pl-10 pr-4 rounded-lg border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400" placeholder="E-Mail Address"
								onChange={(event) => setUserToSign((user) => { user.email = event.currentTarget.value; return user; })}
							/>
						</div>
					</div>
					<div class="flex flex-col mb-6">
						<label for="password" class="mb-1 text-xs sm:text-sm tracking-wide text-gray-600">Password:</label>
						<div class="relative">
							<div class="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400">
								<span>
									<svg class="h-6 w-6" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
										<path d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
									</svg>
								</span>
							</div>

							<input id="password" type="password" name="password" class="text-sm sm:text-base placeholder-gray-500 pl-10 pr-4 rounded-lg border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400" placeholder="Password" />
						</div>
					</div>
					<div class="flex flex-col mb-6">
						<label for="email" class="mb-1 text-xs sm:text-sm tracking-wide text-gray-600">Nickname:</label>
						<div class="relative">
							<div class="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400">
								<svg class="h-6 w-6" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
									<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
									<circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
									<path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
								</svg>
							</div>

							<input id="nickname" type="text" name="nickname" class="text-sm sm:text-base placeholder-gray-500 pl-10 pr-4 rounded-lg border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400" placeholder="Your nickname" />
						</div>
					</div>
					<div class="flex flex-col mb-6">
						<label for="selfBioSex" class="mb-1 text-xs sm:text-sm tracking-wide text-gray-600">What's your biological gender:</label>
						<div class="relative">
							<select id="selfBioSex" name="selfBioSex" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
								<option selected>Choose one option</option>
								<option value="male">male</option>
								<option value="female">female</option>
								<option value="both">both</option>
							</select>
						</div>
					</div>
					<div class="flex flex-col mb-6">
						<label for="selfPsySex" class="mb-1 text-xs sm:text-sm tracking-wide text-gray-600">What's your psychological gender:</label>
						<div class="relative">
							<select id="selfPsySex" name="selfPsySex" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
								<option selected>Choose one option</option>
								<option value="male">male</option>
								<option value="female">female</option>
								<option value="both">both</option>
							</select>
						</div>
					</div>
					<div class="flex flex-col mb-6">
						<label for="recommendBioSex" class="mb-1 text-xs sm:text-sm tracking-wide text-gray-600">What is the biological sex of the person you would like us to recommend to you:</label>
						<div class="relative">
							<select id="recommendBioSex" name="recommendBioSex" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
								<option selected>Choose one option</option>
								<option value="male">male</option>
								<option value="female">female</option>
								<option value="both">both</option>
							</select>
						</div>
					</div>
					<div class="flex flex-col mb-6">
						<label for="recommendPsySex" class="mb-1 text-xs sm:text-sm tracking-wide text-gray-600">What is the psychological sex of the person you would like us to recommend to you:</label>
						<div class="relative">
							<select id="recommendPsySex" name="recommendPsySex" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
								<option selected>Choose one option</option>
								<option value="male">male</option>
								<option value="female">female</option>
								<option value="both">both</option>
							</select>
						</div>
					</div>

					<div class="flex w-full">
						<button type="submit" class="flex items-center justify-center focus:outline-none text-white text-sm sm:text-base bg-blue-600 hover:bg-blue-700 rounded py-2 w-full transition duration-150 ease-in">
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