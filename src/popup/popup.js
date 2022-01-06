//summary: async is a mess and I hate it and myself and I want to die
	//first, get current tab URL
browser.tabs.query({currentWindow: true, active: true})
	.then((tabs) => {
	// find MAL animeID from URL
	let animeID = new URL(tabs[0].url).pathname.split("/")[2]
	//get the link database
	browser.storage.local.get("JsonUrl")
		.then( (JsonUrl) => fetch(JsonUrl["JsonUrl"]))
		.then( (response) => response.json())
		.then( (database) => {
	//get the links and inject into Popup
			let links = database[animeID]
			for (let i in links) {
				var Hlink = document.createElement("Hlink")
				Hlink.textContent = i
				Hlink.href = links[i]
				document.getElementById("PopupForm").appendChild(Hlink)
			}
		})
})
