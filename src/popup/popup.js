function AddLink(linkArray, currentLink) {
	let Hlink = document.createElement("Hlink")
	Hlink.textContent = currentLink
	Hlink.href = linkArray[currentLink]
	document.getElementById("PopupForm").appendChild(Hlink)
}
/*
browser.tabs.query({currentWindow: true, active: true})
	.then( (tabs) => {
		let CurrentTab = tabs[0]
		var animeID = new URL(CurrentTab.url).pathname.split("/")[2]
		//browser.tabs.sendMessage(CurrentTab.id, "GetWatched")
})
*/
// browser.tabs.executeScript({file: "/src/main.js"})
var animeID = browser.storage.local.get("AnimeID")
.then(() => {
	var watched = browser.storage.local.get("CurrentEps")
	.then(() => {
		watched = parseInt(browser.storage.local.get("CurrentEps"))
		var Json = browser.storage.local.get("Database")
		.then(() => {
			var database = JSON.parse(Json)
			var links = database[animeID]
			for (i in links) {
				//check for batch anime
				var Int_i = parseInt(i)
				if (Number.isNaN(Int_i)) {
					AddLink(links, i)
				}
				//check for episodic anime
				else if (Int_i == watched + 1) {
					var episodelinks = links[i]
					for (episode_i in episodelinks) {
						AddLink(episodelinks, episode_i)
					}
				}
			}
		})
	})
})
