
import { For, type Component } from 'solid-js';
import { recomUsersResource } from '../api';
import { friendsStore } from '../context';

const RecommendPage: Component = () => {

	const [getRecUsers, { mutate: mutateUsers, refetch }] = recomUsersResource

	const [likedUsers, setLikedUsers] = friendsStore

	return (
		<div class="container h-full flex flex-col justify-center content-center">
			<div class="stack">
				<For each={getRecUsers()}>
					{(recUser) => <img src={recUser.avatarUrl} class='transition ease-in-out delay-150 rounded-3xl shadow-lg' />}
				</For>
			</div>
			<div class='flex flex-row justify-center mt-10'>
				<span class="text-lg">{getRecUsers() ? getRecUsers()![0].nickname : ""} {getRecUsers() ? getRecUsers()![0].distance?.toFixed(2) : ""} km away</span>
			</div>
			<div class='flex flex-row justify-center mt-2'>
				<span class="px-5">Self Bio Sex: {getRecUsers() ? getRecUsers()![0].selfBioSex : ""}</span>
				<span class="px-5">Self Psy Sex: {getRecUsers() ? getRecUsers()![0].selfPsySex : ""}</span>
			</div>
			<div class='flex flex-row justify-around mt-3'>
				<button class="w-40 inline-flex items-center justify-center bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded-xl"
					onClick={(ev) => {
						const currUser = getRecUsers()![0]
						currUser.like = true
						setLikedUsers(likedUsers.length, currUser)
						mutateUsers((users) => {
							users?.shift()
							return [...users!]
						})
					}}
				>
					<svg class="fill-current w-9 h-9 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
						<path d="M5.301 3.002c-.889-.047-1.759.247-2.404.893-1.29 1.292-1.175 3.49.26 4.926l.515.515L8.332 14l4.659-4.664.515-.515c1.435-1.437 1.55-3.634.26-4.926-1.29-1.292-3.483-1.175-4.918.262l-.516.517-.517-.517C7.098 3.438 6.19 3.049 5.3 3.002z"></path></svg>
					<span class="text-lg">Like</span>
				</button>
				<button class="text-lg w-40 bg-blue-500 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-xl shadow"
					onClick={(ev) => {
						mutateUsers((users) => {
							users?.shift()
							return [...users!]
						})
					}}
				>Next</button>
			</div>
		</div>
	);
};

export default RecommendPage;