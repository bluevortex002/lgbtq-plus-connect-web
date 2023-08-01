import { Component } from "solid-js";
import { userSignal } from "../context";


const SettingsPage: Component = () => {

	const [user, setUser] = userSignal

	return <div class="container ">
		<div class="card card-side card-compact shadow-xl">
			<figure >
				<div class="rounded-full">
					<img class="max-w-[180px] h-[auto]" src={user().avatarUrl} />
			
			</div></figure>
			<div class="card-body">
				<h2 class="card-title">{user().nickname}</h2>
				<div class="card-actions justify-end">
					<div class="grid grid-cols-2 gap-2">
						<button class="btn">
							Self Bio Sex
							<div class="badge">{user().selfBioSex}</div>
						</button>
						<button class="btn">
							Self Bio Sex
							<div class="badge badge-secondary">{user().selfPsySex}</div>
						</button>
						<button class="btn">
							Friend Bio Sex
							<div class="badge">{user().friendBioSex}</div>
						</button>
						<button class="btn">
							Friend Psy Sex
							<div class="badge badge-secondary">{user().friendPsySex}</div>
						</button>
					</div>
				</div>
			</div>
		</div>
		<div class="card">
			<div class="card-body text-center">
				<h2 class="card-title">Download</h2>
				<div class="card-actions justify-end">
					<button class="btn btn-primary">key pair</button>
					<button class="btn btn-primary">chat history</button>
				</div>
			</div>
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