
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
		console.log("response:: ", message)
		watched = parseInt(message)
			// find MAL animeID from URL
		let animeID = new URL(tabs[0].url).pathname.split("/")[2]
		//get the link database
		database = {
			"40834": {
				"link name": "link",

				"2": {
					"link name episode 2": "link episode 2",
					"link name episode 2 a": "link episode 2 a"
				}
			}
		}
		let links = database[animeID]
		
		for (let i in links) {
			let Int_i = parseInt(i)
			if (Int_i == NaN) {
				AddLink(links, i)
			}
			else if (Int_i == watched + 1) {
				let episodelinks = links[i]
				for (let episode_i in episodelinks) {
					AddLink(episodelinks, episode_i)
				}
			}
		}
	})
})
//id="myinfo_watchedeps" get value