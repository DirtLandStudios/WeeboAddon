
//let watched


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
	browser.tabs.sendMessage(tabs[0].id, "GetWatched")
	browser.runtime.onMessage.addListener( (message) => {
		watched = parseInt(message)
			// find MAL animeID from URL
		let animeID = new URL(tabs[0].url).pathname.split("/")[2]
		//get the link database

		let links = database[animeID]
		
		for (i in links) {
			const Int_i = parseInt(i)
			browser.tabs.sendMessage(tabs[0].id, Int_i)

			if (Int_i == watched + 1) {
				episodelinks = links[i]
				for (episode_i in episodelinks) {
					AddLink(episodelinks, episode_i)
				}
			}
			if (Number.isNaN(Int_i)) {
				AddLink(links, i)
			}
		}
	})
})
//id="myinfo_watchedeps" get value