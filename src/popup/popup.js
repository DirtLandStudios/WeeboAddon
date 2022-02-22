function AddLink(linkArray, currentLink) {
	let Hlink = document.createElement("Hlink")
	Hlink.textContent = currentLink
	Hlink.href = linkArray[currentLink]
	document.getElementById("PopupForm").appendChild(Hlink)
}

browser.tabs.query({currentWindow: true, active: true})
	.then( (tabs) => {
		let CurrentTab = tabs[0]
		var animeID = new URL(CurrentTab.url).pathname.split("/")[2]
		//browser.tabs.sendMessage(CurrentTab.id, "GetWatched")
})

// browser.tabs.executeScript({file: "/src/main.js"})


browser.runtime.onMessage.addListener( (message) => {
	let watched = parseInt(message)
	let Json = await browser.storage.local.get("Database")
	let database = Json //JSON.parse(Json)
	let links = database[animeID]
	for (i in links) {
		//check for batch anime
		let Int_i = parseInt(i)
		if (Number.isNaN(Int_i)) {
			AddLink(links, i)
		}
		//check for episodic anime
		else if (Int_i == watched + 1) {
			let episodelinks = links[i]
			for (episode_i in episodelinks) {
				AddLink(episodelinks, episode_i)
			}
		}
	}
})