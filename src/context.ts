import { createSignal } from "solid-js";

export interface User {
	email?: String,
	nickname?: String,
	username?: String,
	userId?: String,
	password?: String,
	description?: String,
	selfBioSex?: String,
	selfPsySex?: String,
	friendBioSex?: String,
	friendPsySex?: String,
	avatarUrl?: String,
	iLikeIt?: boolean,
	itLikeMe?: boolean,
}

export interface Conversation {
	time: String,
	sender: User,
	sendByOthers: boolean,
	message: String,
}

export const userSignal = createSignal<User>()