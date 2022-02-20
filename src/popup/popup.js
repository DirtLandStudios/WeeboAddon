function AddLink(linkArray, currentLink) {
	var Hlink = document.createElement("Hlink")
	Hlink.textContent = currentLink
	Hlink.href = linkArray[currentLink]
	document.getElementById("PopupForm").appendChild(Hlink)
}

browser.tabs.query({currentWindow: true, active: true})
.then((tabs) => {
	var animeID = new URL(tabs[0].url).pathname.split("/")[2]
	browser.tabs.sendMessage(tabs[0].id, "GetWatched")
	browser.runtime.onMessage.addListener( (message) => {
		watched = parseInt(message)
		console.log(watched)
		JsonUrl = await browser.storage.local.get("JsonUrl")
		console.log(JsonUrl)
		database = await fetch(JsonUrl["JsonUrl"])
		console.log(database)
		links = database[animeID]
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
})