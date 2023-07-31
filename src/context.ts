import { createSignal } from "solid-js";
import { createStore } from "solid-js/store";

export type SexOptions = "MALE" | "FEMALE" | "BOTH"

export interface User {
	email?: string,
	nickname?: string,
	username?: string,
	userId?: string,
	password?: string,
	description?: string,
	selfBioSex?: SexOptions,
	selfPsySex?: SexOptions,
	friendBioSex?: SexOptions,
	friendPsySex?: SexOptions,
	avatarUrl?: string,
	like?: boolean
	liked?: boolean,
	distance?: number
}

export interface Conversation {
	isForum: boolean,
	name: string,
	user?: User,
	messages: Message[]
	lastTime: string
}

export interface Message {
	time: string,
	sender: User,
	message: string,
}

export interface Forum {
	name: string,
	pic: string,
	owner: User,
	desc: string,
	createdOn: string,
	members: User[],
}

const yuandong: User = {
	email: "yuandong.li@hsbc.com",
	nickname: "Yuandong",
	username: "yuandong",
	userId: "yuandong",
	password: "xxxxxxxxxxxxxxx",
	description: "a developer in Traded Risk",
	selfBioSex: "MALE",
	selfPsySex: "MALE",
	friendBioSex: "FEMALE",
	friendPsySex: "FEMALE",
	avatarUrl: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fsafe-img.xhscdn.com%2Fbw1%2F529b85ce-a054-4463-ba9f-fe1f598e6c3f%3FimageView2%2F2%2Fw%2F1080%2Fformat%2Fjpg&refer=http%3A%2F%2Fsafe-img.xhscdn.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1693050304&t=854e46de064da36933da5d58f8017078"
}

const realLi: User = {
	email: "real.l.h.li@hsbc.com",
	nickname: "Real",
	username: "real",
	userId: "real",
	password: "xxxxxxxxxxxxx",
	description: "a developer in MSS",
	selfBioSex: "MALE",
	selfPsySex: "MALE",
	friendBioSex: "FEMALE",
	friendPsySex: "FEMALE",
	avatarUrl: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fsafe-img.xhscdn.com%2Fbw1%2Fbcb083cb-0490-4084-b870-72b5cd06fc46%3FimageView2%2F2%2Fw%2F1080%2Fformat%2Fjpg&refer=http%3A%2F%2Fsafe-img.xhscdn.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1693050304&t=3bcb9950e858016eea0a4fa724e26860"
}

export const jinhui: User = {
	email: "jin.hui.zhang@hsbc.com",
	nickname: "Jinhui",
	username: "jinhui",
	userId: "0a474821-4e02-4535-a19f-e9bbef8f9cb8",
	password: "xxxxxxxxxxx",
	description: "a developer in MSS Tooling",
	selfBioSex: "MALE",
	selfPsySex: "MALE",
	friendBioSex: "FEMALE",
	friendPsySex: "FEMALE",
	avatarUrl: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fsafe-img.xhscdn.com%2Fbw1%2F74ecc700-cd6f-4f7d-b44d-231ae09167ff%3FimageView2%2F2%2Fw%2F1080%2Fformat%2Fjpg&refer=http%3A%2F%2Fsafe-img.xhscdn.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1693050304&t=773c92062647f813c6f1df19f3e91339"
}

const conversationList = [
	{
		isForum: false,
		name: "Yuandong",
		user: yuandong,
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
		],
		lastTime: "35 minutes"
	},
]

const forums: Forum[] = [
	{
		name: "Legal counseling services",
		pic: "https://img2.baidu.com/it/u=2414202553,3412755831&fm=253&fmt=auto&app=138&f=PNG?w=500&h=500",
		owner: jinhui,
		desc: "Discuss about law",
		createdOn: "2017-06-06",
		members: [jinhui, yuandong, realLi]
	},
	{
		name: "LGBTQ+ Connect DEV group chat",
		pic: "https://cdn-icons-png.flaticon.com/512/2620/2620829.png",
		owner: jinhui,
		desc: "A awesome forum while developing the LGBTQ+Connect APP",
		createdOn: "2017-06-06",
		members: [jinhui, yuandong, realLi]
	},
]

export const userSignal = createSignal<User>(jinhui)
export const convsStore = createStore<Conversation[]>(conversationList)
export const titleSignal = createSignal<string>("LGBTQ+Connect")
export const convIdxSignal = createSignal<number>(0)
export const forumStore = createStore<Forum[]>(forums)
export const friendsStore = createStore<User[]>([yuandong, realLi])