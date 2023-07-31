import superagent from "superagent"
import { SexOptions, User } from "./context"
import { createResource } from "solid-js"

const baseUrl = "https://connect-plus-dot-mira-392912.ue.r.appspot.com"

export async function sendMsgToUser(selfId: string, userId: string, message: string) {
	try {
		let resp = await superagent.post(`${baseUrl}/chat/msgToUser`)
			.set("cp-header-user", selfId)
			.send({
				msg: message,
				userId: userId
			})
	} catch (err) {

	}
}

export async function signUp(pubkey: string, username: string, nickname: string, selfBioSex: SexOptions, selfPsySex: SexOptions, friendBioSex: SexOptions, friendPsySex: SexOptions) {
	try {
		let resp = await superagent.post(`${baseUrl}/auth/signUp`)
			// .set("Content-Type", "text/plain")
			.send({
				username,
				userPk: pubkey,
				selfBioSex,
				selfPsySex
			})
		return resp
	} catch (err) {
		throw err
	}
}
export async function login(pubkey: string, username: string) {
	try {
		let resp: any = await superagent.post(`${baseUrl}/auth/login`)
			.send({
				username,
				ppkEncryptedUsername: pubkey,
			})
		return resp.body as unknown as LoginResp
	} catch (err) {
		throw err
	}
}
const sexes: SexOptions[] = ["MALE", "FEMALE", "BOTH"]

export const recomUsersResource = createResource(async () => {
	try {
		let resp = await superagent.get("https://randomuser.me/api/?results=10&nat=GB")
			.send()
		let data = resp.body as RandomUserResp
		return data.results.map((u) => {
			let user: User = {
				userId: `${u.name.title}-${u.name.first}-${u.name.last}`,
				nickname: `${u.name.first} ${u.name.last}`,
				username: `${u.name.title}-${u.name.first}-${u.name.last}`,
				selfBioSex: u.gender?.toUpperCase() as unknown as SexOptions,
				selfPsySex: sexes[Math.floor(Math.random() * sexes.length)],
				friendBioSex: sexes[Math.floor(Math.random() * sexes.length)],
				friendPsySex: sexes[Math.floor(Math.random() * sexes.length)],
				avatarUrl: u.picture.large,
				distance: Math.random() * 10 + Math.random()
			}
			return user
		})

	} catch (e) {
		throw e
	}
})
interface LoginResp {
	id: string,
}

const example = {
	"results": [
		{
			"gender": "female",
			"name": {
				"title": "Miss",
				"first": "Jennie",
				"last": "Nichols"
			},
			"location": {
				"street": {
					"number": 8929,
					"name": "Valwood Pkwy",
				},
				"city": "Billings",
				"state": "Michigan",
				"country": "United States",
				"postcode": "63104",
				"coordinates": {
					"latitude": "-69.8246",
					"longitude": "134.8719"
				},
				"timezone": {
					"offset": "+9:30",
					"description": "Adelaide, Darwin"
				}
			},
			"email": "jennie.nichols@example.com",
			"login": {
				"uuid": "7a0eed16-9430-4d68-901f-c0d4c1c3bf00",
				"username": "yellowpeacock117",
				"password": "addison",
				"salt": "sld1yGtd",
				"md5": "ab54ac4c0be9480ae8fa5e9e2a5196a3",
				"sha1": "edcf2ce613cbdea349133c52dc2f3b83168dc51b",
				"sha256": "48df5229235ada28389b91e60a935e4f9b73eb4bdb855ef9258a1751f10bdc5d"
			},
			"dob": {
				"date": "1992-03-08T15:13:16.688Z",
				"age": 30
			},
			"registered": {
				"date": "2007-07-09T05:51:59.390Z",
				"age": 14
			},
			"phone": "(272) 790-0888",
			"cell": "(489) 330-2385",
			"id": {
				"name": "SSN",
				"value": "405-88-3636"
			},
			"picture": {
				"large": "https://randomuser.me/api/portraits/men/75.jpg",
				"medium": "https://randomuser.me/api/portraits/med/men/75.jpg",
				"thumbnail": "https://randomuser.me/api/portraits/thumb/men/75.jpg"
			},
			"nat": "US"
		}
	],
	"info": {
		"seed": "56d27f4a53bd5441",
		"results": 1,
		"page": 1,
		"version": "1.4"
	}
}

type RandomUserResp = typeof example