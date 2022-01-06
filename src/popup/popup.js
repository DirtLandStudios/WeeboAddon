let watched
browser.runtime.onMessage.addListener((message) => {watched = message})
	//.then(() => browser.runtime.onMessage.removeListener)

function AddLink(linkArray, currentLink) {
	var Hlink = document.createElement("Hlink")
	Hlink.textContent = currentLink
	Hlink.href = linkArray[currentLink]
	document.getElementById("PopupForm").appendChild(Hlink)
}

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
				if (!Array.isArray(i)) {
					AddLink(links, i)
				}
				else if (i == watched + 1) {
					let episodelinks = links[i]
					for (let episode_i in episodelinks) {
						AddLink(episodelinks, episode_i)
					}
				}
			}
		})
})
//id="myinfo_watchedeps" get value