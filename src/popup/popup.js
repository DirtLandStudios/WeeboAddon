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
		var watched = parseInt(message)
		browser.storage.local.get("JsonUrl")
		.then( (JsonUrl) => fetch(JsonUrl["JsonUrl"]).json())
		.then( (database) => {
			let links = database[animeID]
			for (i in links) {
				let Int_i = parseInt(i)
				if (Number.isNaN(Int_i)) {
					AddLink(links, i)
				}
				else if (Int_i == watched + 1) {
					let episodelinks = links[i]
					for (episode_i in episodelinks) {
						AddLink(episodelinks, episode_i)
					}
				}
			}
		})
	})
})