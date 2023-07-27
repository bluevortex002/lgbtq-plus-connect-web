import { createSignal } from "solid-js";

export interface User {
	email?: String,
	nickname?: String,
	username?: String,
	userId?: String,
	password?: String,
	description?: String,
	selfBioSex?: "male" | "female" | "both",
	selfPsySex?: "male" | "female" | "both",
	friendBioSex?: "male" | "female" | "both",
	friendPsySex?: "male" | "female" | "both",
	avatarUrl?: String,
	iLikeIt?: boolean
	itLikeMe?: boolean,
}

export interface Conversation {
	isForum: boolean,
	name: String,
	messages: Message[]
	lastTime: String
}

export interface Message {
	time: String,
	sender: User,
	message: String,
}

const yuandong: User = {
	email: "yuandong.li@hsbc.com",
	nickname: "Yuandong",
	username: "yuandong",
	userId: "yuandong",
	password: "xxxxxxxxxxxxxxx",
	description: "a developer in Traded Risk",
	selfBioSex: "male",
	selfPsySex: "male",
	friendBioSex: "female",
	friendPsySex: "female",
	avatarUrl: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fsafe-img.xhscdn.com%2Fbw1%2F529b85ce-a054-4463-ba9f-fe1f598e6c3f%3FimageView2%2F2%2Fw%2F1080%2Fformat%2Fjpg&refer=http%3A%2F%2Fsafe-img.xhscdn.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1693050304&t=854e46de064da36933da5d58f8017078"
}

const realLi: User = {
	email: "real.l.h.li@hsbc.com",
	nickname: "Real",
	username: "real",
	userId: "real",
	password: "xxxxxxxxxxxxx",
	description: "a developer in MSS",
	selfBioSex: "male",
	selfPsySex: "male",
	friendBioSex: "female",
	friendPsySex: "female",
	avatarUrl: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fsafe-img.xhscdn.com%2Fbw1%2Fbcb083cb-0490-4084-b870-72b5cd06fc46%3FimageView2%2F2%2Fw%2F1080%2Fformat%2Fjpg&refer=http%3A%2F%2Fsafe-img.xhscdn.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1693050304&t=3bcb9950e858016eea0a4fa724e26860"
}

const jinhui: User = {
	email: "jin.hui.zhang@hsbc.com",
	nickname: "Jinhui",
	username: "jinhui",
	userId: "jinhui",
	password: "xxxxxxxxxxx",
	description: "a developer in MSS Tooling",
	selfBioSex: "male",
	selfPsySex: "male",
	friendBioSex: "female",
	friendPsySex: "female",
	avatarUrl: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fsafe-img.xhscdn.com%2Fbw1%2F74ecc700-cd6f-4f7d-b44d-231ae09167ff%3FimageView2%2F2%2Fw%2F1080%2Fformat%2Fjpg&refer=http%3A%2F%2Fsafe-img.xhscdn.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1693050304&t=773c92062647f813c6f1df19f3e91339"
}

export const userSignal = createSignal<User>(jinhui)
export const conversationsSignal = createSignal<Conversation[]>([
	{
		isForum: false,
		name: "Yuandong",
		messages: [
			{ time: "2023-07-27 10:54:30", sender: yuandong, message: "In office?" },
			{ time: "2023-07-27 10:54:32", sender: jinhui, message: "yes" },
			{ time: "2023-07-27 10:54:34", sender: yuandong, message: "12:05" },
			{ time: "2023-07-27 10:54:36", sender: jinhui, message: "ok" },
			{ time: "2023-07-27 12:05:36", sender: yuandong, message: "go?" },
			{ time: "2023-07-27 12:05:37", sender: jinhui, message: "gogogo" },
		],
		lastTime: "35 minutes"
	},
	{
		isForum: true,
		name: "Humble",
		messages: [
			{ time: "2023-07-20 10:54:30", sender: jinhui, message: "Welcome Yuandong and Real, let's join the Pride Hackathon!" },
			{ time: "2023-07-27 10:54:32", sender: jinhui, message: "yes" },
			{ time: "2023-07-27 10:54:34", sender: yuandong, message: "12:05" },
			{ time: "2023-07-27 10:54:36", sender: jinhui, message: "ok" },
			{ time: "2023-07-27 12:05:36", sender: yuandong, message: "go?" },
			{ time: "2023-07-27 12:05:37", sender: jinhui, message: "gogogo" },
		],
		lastTime: "35 minutes"
	},
])