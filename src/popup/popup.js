browser.tabs.query({currentWindow: true, active: true})
	.then((tabs) => {
	let animeID = new URL(tabs[0].url).pathname.split("/")[2]
	browser.storage.local.get("JsonUrl")
		.then( (JsonUrl) => fetch(JsonUrl["JsonUrl"]))
		.then( (response) => response.json())
		.then( (database) => {
			let links = database[animeID]
			for (let i in links) {
				var Hlink = document.createElement("Hlink")
				Hlink.textContent = i
				Hlink.href = links[i]
				document.getElementById("PopupForm").appendChild(Hlink)
			}
		})
})
